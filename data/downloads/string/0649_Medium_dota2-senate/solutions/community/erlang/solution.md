# [Erlang] straight-forward simulation by reducing the senate repeatedly

**Author:** lvsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3486413/](https://leetcode.com/problems/dota2-senate/solutions/3486413/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using a linked list, senators can be dropped on the go in constant time. Do this repeatedly until only one party remains.

# Approach
<!-- Describe your approach to solving the problem. -->
Fold over the list of senators, keeping track of who's leading the vote and how many votes they've tallied, how many got removed, and who will make it to the next round:

1. If they get to a senator of the same party, an extra vote gets tallied.
2. If they have more than one vote, and see a senator of the other party, that senator gets voted out.
3. If they don't have any votes, the other party takes the lead.

Afterwards, if $$N$$ votes remained unused, these belong to the party that was leading, so use those to remove the first $$N$$ opposing senators of those that remained before starting the next round.

Continue until no one's voted out.

# Code
```erlang []
-record(senate, {
    lead :: $D | $R,                 % party currently voting
    votes = 1 :: non_neg_integer(),  % votes accumulated
    removed = 0:: non_neg_integer(), % senators removed this round
    next :: [$D | $R]                % next round's senate
}).

-spec predict_party_victory(Senate) -> Result when
    Senate :: unicode:unicode_binary(),
    Result :: unicode:unicode_binary().
predict_party_victory(Senate) ->
    case predict_victory(binary:bin_to_list(Senate)) of
        $D -> <<"Dire">>;
        $R -> <<"Radiant">>
    end.

predict_victory([Senator|Senate]) ->
    State = lists:foldl(
        fun(Sen, State) ->
            case State of
                % Senator is of leading party, add one vote
                #senate{lead = Sen, votes = Votes, next = Next} ->
                    State#senate{votes = Votes + 1, next = [Sen|Next]};
                % Senator isn't voted out, change leadership
                #senate{votes = 0, next = Next} ->
                    State#senate{lead = Sen, votes = 1, next = [Sen|Next]};
                % Senator is voted out, won't participate in the next round
                #senate{votes = Votes, removed = Removed} ->
                    State#senate{votes = Votes - 1, removed = Removed + 1}
            end
        end,
        #senate{lead = Senator, next = [Senator]},
        Senate
    ),
    case State of
        % Senate remained unchanged this round, return leading party
        #senate{lead = Lead, removed = 0} ->
            Lead;
        % Senate hasn't reached equilibrium yet
        #senate{lead = Lead, votes = Votes, next = Next} ->
            % Enact remaining votes on opposition party leadership
            NextSenate = bench_vote(Lead, Votes, lists:reverse(Next)),
            % Start next round
            predict_victory(NextSenate)
    end.

% Return remainder if no longer possible to vote
bench_vote(_, Votes, Rest) when (Votes == 0) or (Rest == []) ->
    Rest;
% Senators of leading party can stay
bench_vote(Lead, Votes, [Lead|Rest]) ->
    [Lead|bench_vote(Lead, Votes, Rest)];
% Senators of opposition are removed at the cost of a vote
bench_vote(Lead, Votes, [_|Rest]) ->
    bench_vote(Lead, Votes - 1, Rest).

```
# Complexity
- Time complexity: $$O(n\\ log(n))$$, worst case, only half of the senate gets voted out each round until only one senator remains, which would take $$log(n)$$ rounds.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->