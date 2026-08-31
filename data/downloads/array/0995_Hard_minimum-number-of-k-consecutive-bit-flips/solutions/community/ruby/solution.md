# ✔️ Beats 100% : Bit Manipulation O(n) : Detailed  Explanation - C++/Java/Python/JS/Ruby/C#/Swift

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5362015/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5362015/)

---

# Intuition
The goal is to flip exactly \\( k \\) consecutive bits in the binary array `nums` such that all elements in `nums` are 1. Flipping a bit changes 0 to 1 or 1 to 0. We need to determine the minimum number of flips required or return -1 if it's impossible.

# Approach
1. Use a variable `flip` to keep track of the current flip state.
2. Iterate through each element in the array.
3. If the current index \\( i \\) is greater than or equal to \\( k \\) and the element \\( k \\) positions behind is greater than 1, adjust the `flip` state.
4. If the current element matches the `flip` state, perform a flip operation:
   - Check if there's enough space to flip \\( k \\) elements.
   - If not, return -1.
   - Otherwise, increment the flip count and toggle the `flip` state.
5. Return the total number of flips required.

# Complexity
- Time complexity: $$ O(n) $$
- Space complexity: $$ O(1) $$

# Code
```C++ []

class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        int n = nums.size();
        int flips = 0;
        int flip = 0; // Track the current flip state

        for (int i = 0; i < n; ++i) {
            if (i >= k && nums[i - k] > 1) {
                flip ^= 1;
                nums[i - k] -= 2; // Reset the marker
            }
            if (nums[i] == flip) {
                if (i + k > n) {
                    return -1; // Not enough space to flip k elements
                }
                flips++;
                flip ^= 1; // Toggle the flip state
                nums[i] += 2; // Mark the start of a flip
            }
        }

        return flips;
    }
};

```
```python []
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        flips = 0
        flip = 0  # Track the current flip state

        for i in range(n):
            # If the flip window has moved past index i, reduce the flip count
            if i >= k and nums[i - k] > 1:
                flip ^= 1
                nums[i - k] -= 2  # Reset the marker

            # If the current element needs to be flipped
            if nums[i] == flip:
                if i + k > n:  # Check if there's enough space to flip k elements
                    return -1
                flips += 1
                flip ^= 1  # Toggle the flip state
                nums[i] += 2  # Mark the start of a flip
        
        return flips
```
```C# []
public class Solution {
    public int MinKBitFlips(int[] nums, int k) {
        int n = nums.Length;
        int flips = 0;
        int flip = 0; // Track the current flip state

        for (int i = 0; i < n; ++i) {
            if (i >= k && nums[i - k] > 1) {
                flip ^= 1;
                nums[i - k] -= 2; // Reset the marker
            }
            if (nums[i] == flip) {
                if (i + k > n) {
                    return -1; // Not enough space to flip k elements
                }
                flips++;
                flip ^= 1; // Toggle the flip state
                nums[i] += 2; // Mark the start of a flip
            }
        }

        return flips;
    }
}

```

```java []
public class Solution {
    public int minKBitFlips(int[] nums, int k) {
        int n = nums.length;
        int flips = 0;
        int flip = 0; // Track the current flip state

        for (int i = 0; i < n; ++i) {
            if (i >= k && nums[i - k] > 1) {
                flip ^= 1;
                nums[i - k] -= 2; // Reset the marker
            }
            if (nums[i] == flip) {
                if (i + k > n) {
                    return -1; // Not enough space to flip k elements
                }
                flips++;
                flip ^= 1; // Toggle the flip state
                nums[i] += 2; // Mark the start of a flip
            }
        }

        return flips;
    }
}

```
```javascript []
var minKBitFlips = function(nums, k) {
    let n = nums.length;
    let flips = 0;
    let flip = 0; // Track the current flip state

    for (let i = 0; i < n; ++i) {
        if (i >= k && nums[i - k] > 1) {
            flip ^= 1;
            nums[i - k] -= 2; // Reset the marker
        }
        if (nums[i] === flip) {
            if (i + k > n) {
                return -1; // Not enough space to flip k elements
            }
            flips++;
            flip ^= 1; // Toggle the flip state
            nums[i] += 2; // Mark the start of a flip
        }
    }

    return flips;
};

```
```swift []
class Solution {
    func minKBitFlips(_ nums: inout [Int], _ k: Int) -> Int {
        let n = nums.count
        var flips = 0
        var flip = 0 // Track the current flip state

        for i in 0..<n {
            if i >= k && nums[i - k] > 1 {
                flip ^= 1
                nums[i - k] -= 2 // Reset the marker
            }
            if nums[i] == flip {
                if i + k > n {
                    return -1 // Not enough space to flip k elements
                }
                flips += 1
                flip ^= 1 // Toggle the flip state
                nums[i] += 2 // Mark the start of a flip
            }
        }

        return flips
    }
}

```
```ruby []
class Solution
    def min_k_bit_flips(nums, k)
        n = nums.length
        flips = 0
        flip = 0 # Track the current flip state

        (0...n).each do |i|
            if i >= k && nums[i - k] > 1
                flip ^= 1
                nums[i - k] -= 2 # Reset the marker
            end
            if nums[i] == flip
                if i + k > n
                    return -1 # Not enough space to flip k elements
                end
                flips += 1
                flip ^= 1 # Toggle the flip state
                nums[i] += 2 # Mark the start of a flip
            end
        end

```
```kotlin []
class Solution {
    fun minKBitFlips(nums: IntArray, k: Int): Int {
        val n = nums.size
        var flips = 0
        var flip = 0 // Track the current flip state

        for (i in nums.indices) {
            if (i >= k && nums[i - k] > 1) {
                flip = flip xor 1
                nums[i - k] -= 2 // Reset the marker
            }
            if (nums[i] == flip) {
                if (i + k > n) {
                    return -1 // Not enough space to flip k elements
                }
                flips++
                flip = flip xor 1 // Toggle the flip state
                nums[i] += 2 // Mark the start of a flip
            }
        }

        return flips
    }
}

```