# Simple Solution. Greedy

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/4764797/](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/solutions/4764797/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer} initial_energy
# @param {Integer} initial_experience
# @param {Integer[]} energy
# @param {Integer[]} experience
# @return {Integer}
def min_number_of_hours(initial_energy, initial_experience, energy, experience)
    
    # Calculate how much hours of training is required in terms of energy
    # to beat all opponents.
    hours_required = [0, (energy.sum + 1 - initial_energy)].max

    # Traverse experience and make sure your fighter has more experience
    # added to their initial experience BEFORE taking on your opponent.
    experience.each do |e|
        if e >= initial_experience
            experienced_needed = ( (e + 1) - initial_experience )
            hours_required += experienced_needed
            initial_experience += experienced_needed
        end
        
        # Consume your opponents experience like a demon consumes souls.
        initial_experience += e
    end

    hours_required
end
```