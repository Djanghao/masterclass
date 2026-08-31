# Elixir - Memoization with Bitmask, with explanation

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3771683/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3771683/)

---

# Intuition
For each person, I have 2 choices:
- hire that person and mark all required skills that person possesses no longer required, then try hiring from rest of the people, or
- don't hire that person, just try hiring from rest of the people.

Just try both, and see which way leads to a smaller team.

# Version 1: Brute-force (timeout)

```elixir
defmodule Solution do
  @spec smallest_sufficient_team(req_skills :: [String.t], people :: [[String.t]]) :: [integer]
  def smallest_sufficient_team(req_skills, people) do
    # 0 is the index of the current person
    hire(req_skills, people, 0) |> elem(1)
  end

  # If no skills are required, just hire no one.
  defp hire([], _people, _i), do: {0, []}

  # If there's nobody left to check,
  # yet there are some required skills,
  # return nil indicating no solution.
  defp hire(_req_skills, [], _i), do: nil

  # Otherwise, try both hiring and skipping current person,
  # and see which way leads to a smaller team.
  defp hire(req_skills, [skills | rest_people], i) do
    hire_current =
      case hire(req_skills -- skills, rest_people, i + 1) do
        nil -> nil
        {len, hired} -> {len + 1, [i | hired]}
      end

    skip_current = hire(req_skills, rest_people, i + 1)

    [hire_current, skip_current]
    |> Enum.reject(&is_nil/1)
    |> Enum.min(fn -> nil end)
  end
end
```

Well, this brute-force strategy leads to **Time Limit Exceeded**.

# Version 2: Naive memoization (accepted)

There's not much to say. Just do it. Again, I'm using my tried-and-true process-dictionary-based memoization.

```elixir
defmodule Solution do
  @spec smallest_sufficient_team(req_skills :: [String.t], people :: [[String.t]]) :: [integer]
  def smallest_sufficient_team(req_skills, people) do
    # Because I'm using process dictionary as the memo,
    # I surely don't want to mess up the process dictionary of the current process,
    # so I just spawn another process to do the nasty things.
    Task.async(fn ->
      hire(req_skills, people, 0) |> elem(1)
    end)
    |> Task.await()
  end

  defp hire([], _people, _i), do: {0, []}

  defp hire(_req_skills, [], _i), do: nil

  defp hire(req_skills, [skills | rest_people], i) do
    # All the args changes their value in each recursion,
    # but `i` and `people` are a one-to-one mapping,
    # we omit `people` from the memo keys.
    memoized({req_skills, i}, fn ->
      hire_current =
        case hire(req_skills -- skills, rest_people, i + 1) do
          nil -> nil
          {len, hired} -> {len + 1, [i | hired]}
        end

      skip_current = hire(req_skills, rest_people, i + 1)

      [hire_current, skip_current]
      |> Enum.reject(&is_nil/1)
      |> Enum.min(fn -> nil end)
    end)
  end

  defp memoized(key, fun) do
    # using `:miss` as the default value,
    # because `nil` indicates "no solution",
    # and is a valid return value of the function `hire`,
    # we have to use another value indicating a cache miss.
    with :miss <- Process.get(key, :miss) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```

Although this version is accepted, it takes about 2.5s to finish, and I feel it's too slow.

I think the performance issue mostly comes from the cache key being too big, so I must find a way to reduce the size of the key.

I first tried using `{:erlang.phash2(req_skills), i}` as the key, and it does save a lot of time (from ~2.5s to ~1.5s), but I feel it's still too slow, because I still need to hash the entire `req_skills` again and again. What's bugs me more is that hashing has a probability of collision, which is fatal to memoization.

# Version 3: Memoization with bitmask (accepted)

So, what if I can use an integer to encode the `req_skills`, and an integer for each person's skills?

It turned out to be very viable. I can just use a `1` indicating the presence of a skill, and a `0` indicating the absence of a skill.

For example, if the initial `req_skills` is

```
[
  "elixir",
  "IoT",
  "react.js"
]
```

We can just encode it into `0b111`, with the lowest bit representing `"elixir"`, the middle bit representing `"IoT"`, and the highest bit `"react.js"`.

If some person has skills

```
[
  "IoT"
  "java",
  "elixir"
]
```

we can just encode it into `0b011` because that person has the skill `"elixir"` (the lowest bit) and `"IoT"` the middle bit, but doesn't have the skill `"react.js"` (the highest bit). We can just ignore the skills that does not in the initial `req_skills`, in this example, `"java"`.

If we hire this person, we need to update the `req_skills` to `0b100`, because we no longer need `"IoT"` and `"elixir"`, but we still need `"react.js"`. So how to update?

I just wrote down the table of truth. For each skill,

| required | person  | result | description |
|:--------:|:-------:|:------:|:------------|
| 0        | 0       | 0      | If a skill is not required, and the person does not have this skill, then it's still not required |
| 0        | 1       | 0      | If a skill is not required, and the person has this skill, then it's still not required |
| 1        | 0       | 1      | If a skill is required, and the person does not have this skill, then it remains required |
| 1        | 1       | 0      | If a skill is required, and the person has this skill, then it's no longer required |

Now we can see `result = required & ~person`.

Here's the code:

```elixir
defmodule Solution do
  import Bitwise

  @spec smallest_sufficient_team(req_skills :: [String.t], people :: [[String.t]]) :: [non_neg_integer]
  def smallest_sufficient_team(req_skills, people) do
    skill_map = build_skill_map(req_skills)

    people = Enum.map(people, &to_skill_bitmask(&1, skill_map))

    # Because the initial `req_skills` are always all 1,
    # we don't need to call `to_skill_bitmask` to encode it.
    req_skills = (1 <<< map_size(skill_map)) - 1

    Task.async(fn ->
      hire(req_skills, people, 0)
    end)
    |> Task.await()
    |> elem(1)
  end

  @typep bitmask :: integer
  @typep index :: non_neg_integer
  @typep len :: non_neg_integer

  @spec hire(bitmask, [bitmask], index) :: nil | {len, [index]}
  defp hire(0, _people, _i), do: {0, []}

  defp hire(_req_skills, [], _i), do: nil

  defp hire(req_skills, [skills | rest_people], i) do
    memoized({req_skills, i}, fn ->
      hire_current = case hire(req_skills &&& ~~~skills, rest_people, i + 1) do
        nil -> nil
        {len, hired} -> {len + 1, [i | hired]}
      end

      skip_current = hire(req_skills, rest_people, i + 1)

      [hire_current, skip_current]
      |> Enum.reject(&is_nil/1)
      |> Enum.min(fn -> nil end)
    end)
  end

  @typep offset :: non_neg_integer
  @typep skill_map :: %{String.t => offset}

  @spec build_skill_map([String.t]) :: skill_map
  defp build_skill_map(req_skills) do
    req_skills
    |> Enum.with_index()
    |> Map.new()
  end

  @spec to_skill_bitmask([String.t], skill_map) :: bitmask
  defp to_skill_bitmask(skills, skill_map) do
    Enum.reduce(skills, 0, fn skill, acc ->
      case skill_map[skill] do
        nil -> acc
        offset -> acc ||| (1 <<< offset)
      end
    end)
  end

  @spec memoized(key, (-> value)) :: value
        when key: any,
             value: any
  defp memoized(key, fun) do
    with :miss <- Process.get(key, :miss) do
      fun.() |> tap(&Process.put(key, &1))
    end
  end
end
```

With this approach, the total time of execution goes down to ~1s.