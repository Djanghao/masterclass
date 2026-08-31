# Ruby solution || Beat 100% || Hash

**Author:** shafiulshaon
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3379768/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3379768/)

---

# step-by-step explanation of the code:

1. Initialize the variable count to 0, which will store the number of partitions.
2. Initialize a hash called part to store the unique characters in the current partition.
3. Iterate through each character in the input string s along with its index.
a. If the current character char is already present in the part hash (it is a duplicate), increment the count by 1, which indicates that a new partition has been formed, and then clear the part hash to start a new partition.
b. If the current character char is not a duplicate, add it to the part hash.
c. If the current character is the last character of the string, increment the count by 1 to account for the current partition.
4. Return the count, which represents the number of partitions formed.

# Code
```
# @param {String} s
# @return {Integer}
def partition_string(s)
  count = 0
  part = {}
  s.each_char.with_index do |char, index|
    if part.key?(char)
      count += 1
      part.clear
    end
    part[char] = true
    count += 1 if index == s.length - 1
  end
  count
end

```