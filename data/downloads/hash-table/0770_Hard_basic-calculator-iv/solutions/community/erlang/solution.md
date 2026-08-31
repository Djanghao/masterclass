# [Erlang/Elixir] DFS on an Abstract Syntax Tree

**Author:** tangj1905
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/3297216/](https://leetcode.com/problems/basic-calculator-iv/solutions/3297216/)

---

Erlang and Elixir, being built on the BEAM virtual machine, both have some nice features when it comes to parsing! These utilities are built into the standard libraries to manipulate the languages' abstract syntax trees, and we can leverage these functionalities for this problem.

Here, we can utilize the [erl_scan](https://www.erlang.org/doc/man/erl_scan.html) and, [erl_parse](https://www.erlang.org/doc/man/erl_parse.html) modules in Erlang, along with the [Code](https://hexdocs.pm/elixir/1.13/Code.html) utility module in Elixir to accomplish this. Both of these provide excellent tools to parse an expression into a syntax tree that'll make our job much easier.

---

# Overview
Here's the basic idea of our algorithm:

1) Generate the syntax tree from the provided expression.
2) Traverse the tree using a depth-first search, accumulating and combining terms accodingly for each operation.
3) Sort, parse, and format the output!

And a few notes regarding each step:

## Generation
We can simplify our lives here by performing the binding substitutions directly on the tokens themselves! It's also entirely possible to bind the tokens during traversal, as you'll see in the Elixir code. Both approaches are relatively hassle-free.

Nodes representing operations, integer values, and "variables" (actually represented as atoms) in our abstract syntax tree are represented by the following tuples (in Erlang):

``{op, <Annotations>, OpType, <LeftExpr>, <RightExpr>}``
``{integer, <Annotations>, <Val>}``
``{atom, <Annotations>, <Name>}``

And in Elixir:

``{<op>, [annotations], [args]}``
``val``
``{<name>, [annotations], nil}``

## Traversal
We simply perform a depth-first-search on the abstract syntax tree once it's generated. Each term is a map in the following format:

``#{Vars => Count}``

...where ``Vars`` is a sorted list of free variables bound together. For example, the term ``5*a*b*b*c`` is represented by the following map entry:

``#{[a, a, b, c] => 5}``

We create rules on how to combine two different sets of terms depending on whether we're adding, subtracting, or multiplying; then we simply propagate these values up the tree!

## Formatting
By the end, we're left with a single map containing all of the accumulated terms from our traversal. We can simply just sort our terms by degree, filter out the terms with a coefficient of zero, and structure the output to match the format that's required. 

---

# Code

## Erlang
The syntax here is a bit messy, and the standard library isn't nearly as convenient to use here!

```erlang
-type expr() :: unicode:unicode_binary().
-type var()  :: unicode:unicode_binary().

-spec basic_calculator_iv(Expr :: expr(), Vars :: [var()], Vals :: [integer()]) -> [expr()].
basic_calculator_iv(Expr, Vars, Vals) ->
  Bindings = maps:from_list(lists:zip(Vars, Vals)),
  SynTree = to_tree(Expr, Bindings),
  Terms = lists:filter(fun ({_K, V}) -> V /= 0 end, maps:to_list(eval(SynTree))),
  SortedTerms = lists:sort(fun ord/2, Terms),
  lists:map(fun render/1, SortedTerms).

%% ===================================
%%   ABSTRACT SYNTAX TREE GENERATION
%% ===================================
%% We can use Erlang's built-in parsing utilities to
%% generate an abstract syntax tree! This tree is given
%% as a sequence of nested tuples.
to_tree(Expr, Bindings) ->
  Tokens = binary:split(<<Expr/binary, ".">>, <<" ">>, [global, trim_all]),
  {ok, ErlTokens, _} = erl_scan:string(unicode:characters_to_list(Tokens)),

  % Here, we can make our binding substitutions:
  Bind = fun({atom, _, NameAtom} = Token) ->
      VarName = atom_to_binary(NameAtom),
      case Bindings of
        #{VarName := Val} -> {integer, 1, Val};
        _ -> Token
      end;
    (Token) -> Token
  end,
  {ok, [SynTree]} = erl_parse:parse_exprs(lists:map(Bind, ErlTokens)),
  SynTree.

%% ==================================
%%   ABSTRACT SYNTAX TREE TRAVERSAL
%% ==================================
%% Here, terms are represented by maps! The key is a list of free
%% variables (or an empty list for integers), and the value is the
%% number of corresponding times this key is present. Variables with
%% higher multiplicities simply appear multiple times in its term key.
eval({op, _, Type, Lhs, Rhs}) ->
  {LTerms, RTerms} = {eval(Lhs), eval(Rhs)},
  case Type of
    '+' -> add(LTerms, RTerms);
    '-' -> sub(LTerms, RTerms);
    '*' -> mul(LTerms, RTerms);
    _   -> throw({badop, Type})
  end;

%% Simple integer & variable evaluation:
eval({integer, _, Val}) ->
  #{[] => Val};
eval({atom, _, Var}) ->
  #{[Var] => 1}.

%% Specialized rules for handling our three main operators.
%% For addition, we simply combine the terms:
add(LTerms, RTerms) ->
  maps:merge_with(fun(_K, V1, V2) -> V1 + V2 end, LTerms, RTerms).

%% For subtraction, we negate the right-hand terms and combine:
sub(LTerms, RTerms) ->
  Combiner = fun({K, V}, LMap) ->
    maps:update_with(K, fun(V1) -> V1 - V end, -V, LMap)
  end,
  lists:foldl(Combiner, LTerms, maps:to_list(RTerms)).

%% For multiplication, we generate the cartesian product of the
%% free variables and combine like terms via sorting:
mul(LTerms, RTerms) ->
  NewTerms = [{lists:sort(LK ++ RK), LV * RV} ||
                  {LK, LV} <- maps:to_list(LTerms),
                  {RK, RV} <- maps:to_list(RTerms)],

  Combiner = fun({K, V}, Map) ->
    maps:update_with(K, fun(V1) -> V + V1 end, V, Map)
  end,
  lists:foldl(Combiner, #{}, NewTerms).

%% =====================
%%   OUTPUT FORMATTING
%% =====================
%% A custom sort ordering by length & lexicographic order:
ord({A, _}, {B, _}) ->
  {LenA, LenB} = {length(A), length(B)},
  case LenA == LenB of
    true -> A =< B;
    _    -> LenA > LenB
  end.

%% Renders the output for each term:
render({Vars, Qty}) ->
  VarBin = lists:map(fun atom_to_binary/1, Vars),
  Prefixed = [integer_to_binary(Qty) | VarBin],
  Joined = lists:join(<<"*">>, Prefixed),
  unicode:characters_to_binary(Joined).
```

## Elixir

The code is a lot cleaner and more concise! We don't need to write helper functions for generating the syntax tree and formatting our output, since Elixir's standard library adds a lot of useful functionality on top of Erlang's.

```elixir
defmodule Solution do
  @spec basic_calculator_iv(expr :: String.t, vars :: [String.t], vals :: [integer]) :: [String.t]
  def basic_calculator_iv(expr, vars, vals) do
    bindings = Enum.zip(vars, vals) |> Enum.into(%{})
    tree = Code.string_to_quoted!(expr)

    eval(tree, bindings)
    |> Enum.reject(fn {_k, v} -> v == 0 end)
    |> Enum.sort_by(fn {k, _v} -> {-length(k), k} end)
    |> Enum.map(fn {k, v} -> Enum.join([v | k], "*") end)
  end

  # Evaluates an operation in our calculator.
  # This is where we traverse the syntax tree!
  defp eval({op, _, [lhs, rhs]}, bindings) do
    {lterms, rterms} = {eval(lhs, bindings), eval(rhs, bindings)}
    case op do
      :+ -> add(lterms, rterms)
      :- -> sub(lterms, rterms)
      :* -> mul(lterms, rterms)
      _  -> raise SyntaxError, message: "Invalid operator: #{op}"
    end
  end

  # Evaluating integers and variables:
  defp eval(v, _) when is_integer(v), do: %{[] => v}
  defp eval({var, _, nil}, bindings) do
    var = Atom.to_string(var)
    case bindings[var] do
      nil -> %{[var] => 1}
      val -> %{[] => val}
    end
  end

  # Combines terms for add, subtract, and multiply:
  defp add(lterms, rterms) do
    Map.merge(lterms, rterms, fn _k, v1, v2 -> v1 + v2 end)
  end

  defp sub(lterms, rterms) do
    rterms |> Map.new(fn {k, v} -> {k, -v} end) |> add(lterms)
  end

  defp mul(lterms, rterms) do
    for {lk, lv} <- lterms, {rk, rv} <- rterms, reduce: %{} do
      terms -> Map.update(terms, Enum.sort(lk ++ rk), lv * rv, & &1 + lv * rv)
    end
  end
end
```
