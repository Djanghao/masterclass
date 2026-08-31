# Intuition with approach, easy to understand C++, Pyhton

**Author:** codeanzh
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4709304/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/solutions/4709304/)

---

# Intuition
Intution for solving this problem was that, the expressions:
- `nums[i + k + 1] > nums[i + k]` if `pattern[k] == 1`.
- `nums[i + k + 1] == nums[i + k]` if `pattern[k] == 0`.
- `nums[i + k + 1] < nums[i + k]` if `pattern[k] == -1`.

Now stay with me for a while.
Lets create a string `str_nums` from `nums` of size `len(nums) - 1` such that:
- `str_nums[i] = '1'` if `nums[i + 1] > nums[i]`.
- `str_nums[i] = '0'` if `nums[i + 1] == nums[i]`.
- `str_nums[i] = '-'` if `nums[i + 1] < nums[i]`.

And aslo lets convert our `pattern` to a string `str_pattern` of size `pattern` such that:
- `str_pattern[i] = '1'` if `pattern[i] == 1`.
- `str_pattern[i] = '0'` if `pattern[i] == 0`.
- `str_pattern[i] = '-'` if `pattern[i] == -1`.

So now if you see this closely you can observe that for a given array `nums[i,,,j]` say `subset_nums` of size `k` (size of `pattern`).
We can say that `subset_nums` apply the abbove expressions for our `pattern` if our string `str_pattern` is equal to `str_nums[i,,,j]` because we handled the string equality with the given expression.


(The last value from nums will be ignored in s as it will include its result).

Now our problem is converted into a simpler problem given a string `str_nums` and string `str_pattern`, find number of occurence of `str_pattern` in `str_nums`.

# Approach
We can use [Rabin-Karp Algorithm](https://cp-algorithms.com/string/rabin-karp.html) for calculating the the number of occurence of `p` in `s` for optimization which uses [polynomial rolling hash function](https://cp-algorithms.com/string/string-hashing.html#:~:text=polynomial%20rolling%20hash%20function) to calculate hash of string subset of a string in a rolling manner so that it can use the pre calculated hash to compute the hash of another substringin a rolling manner (Like a sliding window approach).


---

# Example

`nums` = `[1,2,3,4,5,6]` and `pattern` = `[1,1]`
`str_nums` and `str_pattern` are `"11111"` and `"11"`
so occurence of `"11"` in `"11111"` is 4.

`nums` = `[1,4,4,1,3,5,5,3]` and `pattern` = `[1,0,-1]`
`str_nums` and `str_pattern` are `"10-110-"` and `"10-"`
so occurence of `"10-"` in `"10-110-"` is 2.

`nums` = `[24200748,24200748,30953357,30953357,24200748,24200748,19192109,24200748,30953357,30953357,24200748,24200748,19192109,24200748,30953357]` and `pattern` = `[1,0,-1,0,-1,1]`
`str_nums` and `str_pattern` are `"010-0-110-0-11"` and `"10-0-1"`
so occurence of `"10-0-1"` in `"010-0-110-0-11"` is 2.


---



# Complexity
- Time complexity:
$$O(n + m)$$, where `m`, `n` are the lengths of `nums`, and `pattern`

- Space complexity:
$$O(n + m)$$, where `m`, `n` are the lengths of `nums`, and `pattern`

# Code
**C++**
```
class Solution {
    const int BASE = 5; // Base for polynomial rolling hash
    const int PRIME = 1e9 + 9; // Prime number for modulo operation
    long long power = 1;

    // Assigning numeric values to characters
    long long char_num(char ch) {
        if (ch == '1') return 1;
        if (ch == '0') return 2;
        return 3;
    }

    // Function to compute the hash value of a substring
    long long rolling_hash(const string& s) {
        long long hash_value = 0;
        for (int i = 0; i < s.size(); ++i) {
            hash_value = (hash_value * BASE) % PRIME;
            hash_value = (hash_value + char_num(s[i])) % PRIME;
        }
        return hash_value;
    }

    // Function to update hash value when sliding the window
    long long update_hash(long long old_hash, char old_char, char new_char, int length) {
        long long old_char_value = char_num(old_char);
        long long new_char_value = char_num(new_char);
        long long new_hash = ((old_hash - old_char_value * power) * BASE + new_char_value) % PRIME;
        return (new_hash + PRIME) % PRIME; // Ensure result is positive
    }


    int count(string s, string p) {
        long long hash_p = rolling_hash(p);
        string ss = s.substr(0, p.size());
        long long hash_s = rolling_hash(ss);
        int ans = hash_p == hash_s;
        for (int i = p.size(); i < s.size(); i++) {
            hash_s = update_hash(hash_s, s[i - p.size()], s[i], p.size());
            ans += hash_p == hash_s;
        }

        return ans;
    }
public:
    int countMatchingSubarrays(vector<int>& nums, vector<int>& pattern) {
        for (int i = 0; i < (int)pattern.size() - 1; ++i) {
            power = (power * BASE) % PRIME;
        }
        string s = "", p = "";
        for (int i = 0; i < (int)nums.size() - 1; i++) {
            if (nums[i + 1] > nums[i]) s.push_back('1');
            else if (nums[i + 1] == nums[i]) s.push_back('0');
            else s.push_back('-');
        }
        for (int i = 0; i < pattern.size(); i++) {
            if (pattern[i] == 1) p.push_back('1');
            else if (pattern[i] == 0) p.push_back('0');
            else p.push_back('-');
        }
        
        return count(s, p);
    }
};
```
**Python**
```
class Solution:
    BASE = 5  # Base for polynomial rolling hash
    PRIME = 10**9 + 9  # Prime number for modulo operation

    def __init__(self):
        self.power = 1

    # Function to compute the hash value of a substring
    def rolling_hash(self, s):
        hash_value = 0
        for char in s:
            hash_value = (hash_value * self.BASE + self.char_value(char)) % self.PRIME
        return hash_value

    # Function to update hash value when sliding the window
    def update_hash(self, old_hash, old_char, new_char, length):
        old_char_value = self.char_value(old_char)
        new_char_value = self.char_value(new_char)
        new_hash = ((old_hash - old_char_value * self.power) * self.BASE + new_char_value) % self.PRIME
        return new_hash

    # Helper function to map characters to numeric values
    def char_value(self, char):
        if char == '1':
            return 1
        elif char == '0':
            return 2
        elif char == '-':
            return 3
        else:
            raise ValueError("Invalid character")

    def count(self, s, p):
        hash_p = self.rolling_hash(p)
        hash_s = self.rolling_hash(s[:len(p)])
        ans = int(hash_p == hash_s)
        for i in range(len(p), len(s)):
            hash_s = self.update_hash(hash_s, s[i - len(p)], s[i], len(p))
            ans += int(hash_p == hash_s)
        return ans

    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
        for i in range(len(pattern) - 1):
            self.power = (self.power * self.BASE) % self.PRIME

        s = ""
        p = ""
        for i in range(len(nums) - 1):
            if nums[i + 1] > nums[i]:
                s += '1'
            elif nums[i + 1] == nums[i]:
                s += '0'
            else:
                s += '-'

        for val in pattern:
            if val == 1:
                p += '1'
            elif val == 0:
                p += '0'
            else:
                p += '-'

        return self.count(s, p)

```