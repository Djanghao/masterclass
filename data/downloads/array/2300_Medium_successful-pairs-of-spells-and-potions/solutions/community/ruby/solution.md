# Ruby Solution: two methods

**Author:** guswhitten
**Votes:** 2
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2976823/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2976823/)

---

### Method 1:  Brute Force (gives TLE)
Time Complexity O(m*n)

```
def successful_pairs(spells, potions, success)
    spells.map { |spell| potions.count { |potion| spell * potion >= success } }
end
```

### Method 2: Binary Search
Time Complexity O(n*log(m))

Process:
* Sort `potions` so we can use bsearch 
* Get 1st index in `potions` where: `potion*spell >= success` 
	* or equivalently: `potion >= success/spell`
* Return the number of `potions` greater than the successful one found, or 0 if none were found

```
def successful_pairs(spells, potions, success)
    potions.sort! 
    spells.map do |spell_str|
        min_pot_str = success.fdiv(spell_str)
        idx = potions.bsearch_index { |potion| potion >= min_pot_str }
        idx.nil? ? 0 : potions.size - idx
    end
end
```