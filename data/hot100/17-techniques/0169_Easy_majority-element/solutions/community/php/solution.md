# Beats💯% ||✨Boyer–Moore Majority Vote Algorithm✨|| ✅Time C. - O(n) and ✅Space C. - O(1)

**Author:** farhanzamanarnob
**Votes:** 8
**Link:** [https://leetcode.com/problems/majority-element/solutions/4803378/](https://leetcode.com/problems/majority-element/solutions/4803378/)

---

# Intuition
The Boyer-Moore Majority Vote Algorithm is designed to find the majority element in an array efficiently. The majority element is the one that appears more than \u230An/2\u230B times, where n is the size of the array. The key insight is that if we cancel out each occurrence of an element with all the other elements that are different from it, the majority element will still remain in the last position.

# Understanding the Algorithm
The idea is to scan through the elements of the sequence and keep track of a candidate element. When a new element is encountered, if it matches the candidate, we increase a counter; if it doesn't match, we decrease the counter. If the counter becomes zero, we choose the current element as the new candidate.

The algorithm guarantees that if there is a majority element (an element that appears more than half the time), it will be the final candidate. After scanning the entire sequence, we perform a second pass to confirm that the candidate is indeed the majority element.

This algorithm is efficient because it eliminates pairs of different elements, gradually revealing the majority element as the final candidate.This can be expressed in _**pseudocode**_ as the following steps:

- Initialize an element $$m$$ and a counter $$c$$ with $$c$$ = 0
- For each element $$x$$ of the input sequence:
    > If $$c$$ = 0, then assign $$m$$ = $$x$$ and $$c$$ = 1
    > else if $$m$$ = $$x$$, then assign $$c$$ = $$c$$ + 1
    > else assign $$c$$ = $$c$$ \u2212 1

- Return $$m$$

# Approach
**The algorithm uses two variables, m and c.**

- $$m$$ : Represents the current candidate for the majority element.
- $$c$$ : Represents a counter for the occurrences of the current candidate.

**The algorithm iterates through the array, and for each element:**

- _If $$c$$ is zero, it sets the current element as the candidate $$m$$ and resets $$c$$ to 1._
- _If the current element is the same as the candidate $$m$$, it increments $$c$$._
- _If the current element is different from the candidate $$m$$, it decrements $$c$$._

This way, as the algorithm progresses, it keeps a track of the potential majority element. If there is a majority element in the array, it will be the final value of m after the iteration.

# Complexity
- Time complexity:
    >The algorithm iterates through the array once, so the time complexity is **O(n)**, where n is the size of the array.

- Space complexity:
    >The algorithm uses only a constant amount of space (two variables), so the space complexity is **O(1)**. No additional space is proportional to the input size.

# Code
```Java []
class Solution {
    public int majorityElement(int[] nums) {
        int c = 0;
        int m = 0;
        for (int x : nums) {
            if (c == 0) {
                m = x;
                c = 1;
            } else if (x == m)
                c++;
            else
                c--;
        }
        return m;
    }
}
```
```C++ []
class Solution {
public:
    int majorityElement(std::vector<int>& nums) {
        int c = 0;
        int m = 0;
        for (int x : nums) {
            if (c == 0) {
                m = x;
                c = 1;
            } else if (x == m) {
                c++;
            } else {
                c--;
            }
        }
        return m;
    }
};
```
```Python []
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        c = 0
        m = 0
        for x in nums:
            if c == 0:
                m = x
                c = 1
            elif x == m:
                c += 1
            else:
                c -= 1
        return m
```
```C# []
public class Solution {
    public int MajorityElement(int[] nums) {
        int c = 0;
        int m = 0;
        foreach (var x in nums) {
            if (c == 0) {
                m = x;
                c = 1;
            } else if (x == m) {
                c++;
            } else {
                c--;
            }
        }
        return m;
    }
}
```
```JavaScript []
class Solution {
    majorityElement(nums) {
        let c = 0;
        let m = 0;
        for (const x of nums) {
            if (c === 0) {
                m = x;
                c = 1;
            } else if (x === m) {
                c++;
            } else {
                c--;
            }
        }
        return m;
    }
}
```
```Ruby []
class Solution
  def majority_element(nums)
    c = 0
    m = 0
    nums.each do |x|
      if c == 0
        m = x
        c = 1
      elsif x == m
        c += 1
      else
        c -= 1
      end
    end
    m
  end
end

```
```PHP []
class Solution {
    function majorityElement($nums) {
        $c = 0;
        $m = 0;
        foreach ($nums as $x) {
            if ($c == 0) {
                $m = $x;
                $c = 1;
            } elseif ($x == $m) {
                $c++;
            } else {
                $c--;
            }
        }
        return $m;
    }
}

```
```Rust []
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut c = 0;
        let mut m = 0;
        for x in nums {
            if c == 0 {
                m = x;
                c = 1;
            } else if x == m {
                c += 1;
            } else {
                c -= 1;
            }
        }
        m
    }
}
```
