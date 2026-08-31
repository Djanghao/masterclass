# Reducers

**Author:** jtaylorgonzales
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5841274/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/5841274/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```elixir []
defmodule Solution do
  @spec min_number_of_hours(initial_energy :: integer, initial_experience :: integer, energy :: [integer], experience :: [integer]) :: integer

  def min_number_of_hours(initial_energy, initial_experience, enemy_energies, enemy_experiences) do
    {_current_energy, training_needed_energy } = 
    Enum.reduce(enemy_energies, {initial_energy, 0}, fn enemy_energy, {current_energy, acc} -> 
        if(current_energy > enemy_energy) do
            {current_energy - enemy_energy, acc}
        else
             training_needed = (current_energy - enemy_energy) * -1 + 1
            {current_energy + training_needed - enemy_energy, acc + training_needed}
        end
    end)

    {_current_exp, training_needed_exp } = 
    Enum.reduce(enemy_experiences, {initial_experience, 0}, fn enemy_exp, {current_exp, acc} -> 
        if(current_exp > enemy_exp) do
            {current_exp + enemy_exp, acc}
        else
             training_needed = (current_exp - enemy_exp) * -1 + 1
             acc = if training_needed > acc, do: training_needed, else: acc
            {current_exp + enemy_exp, acc}
        end
    end)

    training_needed_exp + training_needed_energy
  end
end

```