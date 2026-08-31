# 【Video】2 solutions with frequency or 3 pointers

**Author:** niits
**Votes:** 240
**Link:** [https://leetcode.com/problems/sort-colors/solutions/5580767/](https://leetcode.com/problems/sort-colors/solutions/5580767/)

---

# Intuition
Count frequency or use 3 pointers.

# Solution Video

https://youtu.be/fqhlSQlXjlk

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 7,076
Thank you for your support!

---

# Approach
I'll show you two ways to solve this question.
```
Input: nums = [2,0,2,1,1,0]
``` 

# Solution 1
Simply if we know frequency of each number, we can solve this question, so the first step of solution 1 is to count each number. I'll keep them with `HashMap`.

```
count = {0:2, 1:2, 2:2}

key is color number
value is frequency
```
Next step is to update input array. We can update it **because we know that we have 2 red, 2 white and 2 blue and order of colors.**

For instance, we have 2 red. **That means we should update index 0 and index 1 with 0.**

```
i = 0 (= update start point)
nums = [2,0,2,1,1,0]
        i
\u2193
nums = [0,0,2,1,1,0]
        i
```
Then update `i` with freqency of red. **That should be the next update start point with white number**(= `1`).
```
i = 0 + 2
nums = [0,0,2,1,1,0]
            i
```
Then update index `2` and `3` with white number, **because we have 2 white.**
```
nums = [0,0,1,1,1,0]
            i
```
Update `i`.
```
i = 2 + 2
nums = [0,0,1,1,1,0]
                i
```
Then we will update index `4` and `5` with blue number(= `2`)
```
nums = [0,0,1,1,2,2]
                i
```
Update `i`
```
i = 4 + 2
nums = [0,0,1,1,2,2]
                    i
```
```
return [0,0,1,1,2,2]
```

---

https://youtu.be/bU_dXCOWHls

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
We have only red, white and blue colors.

```python []
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        count = {}
        for i in range(len(nums)):
            count[nums[i]] = count.get(nums[i], 0) + 1
        
        idx = 0

        for color in range(3):
            freq = count.get(color, 0)
            nums[idx : idx + freq] = [color] * freq
            idx += freq
```
```javascript []
var sortColors = function(nums) {
    let count = {0: 0, 1: 0, 2: 0};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }

    let idx = 0;
    for (let color = 0; color < 3; color++) {
        let freq = count[color];
        for (let j = 0; j < freq; j++) {
            nums[idx] = color;
            idx++;
        }
    }    
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        HashMap<Integer, Integer> count = new HashMap<>();
        count.put(0, 0);
        count.put(1, 0);
        count.put(2, 0);

        for (int num : nums) {
            count.put(num, count.get(num) + 1);
        }

        int idx = 0;
        for (int color = 0; color < 3; color++) {
            int freq = count.get(color);
            for (int j = 0; j < freq; j++) {
                nums[idx] = color;
                idx++;
            }
        }        
    }
}
```
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        unordered_map<int, int> count = {{0, 0}, {1, 0}, {2, 0}};

        for (int num : nums) {
            count[num]++;
        }

        int idx = 0;
        for (int color = 0; color < 3; color++) {
            int freq = count[color];
            for (int j = 0; j < freq; j++) {
                nums[idx] = color;
                idx++;
            }
        }        
    }
};
```

# Step by Step Algorithm

1. **Initialization**:
   - Create an empty dictionary `count` to store the frequency of each color (0, 1, 2).
   ```python
   count = {}
   ```

2. **Count Frequencies**:
   - Iterate through each element in the input array `nums`.
   - For each element (color) in `nums`, update its count in the `count` dictionary. If the color is not already in the dictionary, initialize it with 0 and then increment it by 1.
   ```python
   for i in range(len(nums)):
       count[nums[i]] = count.get(nums[i], 0) + 1
   ```
   - **Explanation**:
     - Loop through each element in `nums`:
       - If `nums[i]` is already a key in `count`, increment its value by 1.
       - If `nums[i]` is not a key in `count`, add it with a value of 1.

3. **Reconstruct the Array**:
   - Initialize a variable `idx` to 0. This will be used to keep track of the position in the `nums` array where the next color should be placed.
   ```python
   idx = 0
   ```

4. **Iterate through the colors 0, 1, and 2**:
   - For each color, get its frequency from the `count` dictionary (default to 0 if the color is not present).
   - Update the segment of the `nums` array from `idx` to `idx + freq` with the current color repeated `freq` times.
   - Increment `idx` by `freq` to move to the next segment of the array for the next color.
   ```python
   for color in range(3):
       freq = count.get(color, 0)
       nums[idx : idx + freq] = [color] * freq
       idx += freq
   ```
   - **Explanation**:
     - Loop through each color (0, 1, 2):
       - Get the frequency of the current color from `count`. If the color is not found, use 0.
       - Update the segment of `nums` from `idx` to `idx + freq` with the current color repeated `freq` times.
       - Increment `idx` by `freq` to prepare for the next color.


---

# Solution 2
```
Input: nums = [2,0,2,1,1,0]
``` 

We use `3` pointers which are for red, white and blue. But it's tough to manage `3` pointers at the same time, so my strategy is to fix both sides of array which are `red` (= `0`) and `blue`(= `2`)

We know that red is left side of array and blue is right side of array in the end, so seems like we should start `red` pointer from index `0` and `blue` pointer from `the last index`.

```
[2,0,2,1,1,0]
 r         b
```
- How about `white` pointer?
We use `white` pointer for current position, so start from index `0`. If we fix both side of colors, all `white` number will be around center of array.

Let's see how it works.

```
 w
[2,0,2,1,1,0]
 r         b
```
Now check `white` pointer. It's pointing to `2` that is `blue`, so swap `2` and the number at `blue` pointer.
```
 w
[0,0,2,1,1,2]
 r         b
```
Then move `blue` pointer to next, becuase we fix `2` at the last index. The next blue number should move to `the last index - 1`.
```
 w
[0,0,2,1,1,2]
 r       b
```
In this case, we don't move `white` pointer, because there are cases where swapped number should move to earlier index. I'll show you later.

Anyway, Let's move on. Next check `white` pointer again. It's `0`, so swap `0` with the number at `red` pointer. They are pointing to the same `0`, so nothing will change.

We fix `0` at index `0`, so move `red` pointer to next.
```
 w
[0,0,2,1,1,2]
   r     b
```
In this case, we should move `white` pointer to next. **That's because all white numbers will be behind all red numbers.**
```
   w
[0,0,2,1,1,2]
   r     b
```
Next, check `white` pointer again. It's `0`, so swap `0` with the number at `red` pointer. Nothing will change and move `red` and `white` pointer to next.
```
     w
[0,0,2,1,1,2]
     r   b
```
Next, check `white` pointer again. It's `2`. It's `blue`, so swap `2` and the number at `blue` pointer. Move `blue` pointer to the next.

```
     w
[0,0,1,1,2,2]
     r b
```
Next, check `white` pointer again. It's `1`. Now `white` pointer is pointing to `white` number. In this case no swap, just move `white` pointer to next **because we are tring to fix both side of array with `red` and `blue`.**
```
       w
[0,0,1,1,2,2]
     r b
```
Again `white` pointer is pointing `white` number. Move `white` pointer to next. No swap.

```
         w
[0,0,1,1,2,2]
     r b
```
Now `white` pointer is greater than `blue` pointer. We stop iteration. We fix both sides of array with `red` and `blue`. That leads to collecting `white` around center of array.   
```
return [0,0,1,1,2,2]
```

---


Let's see if we move `white` and `blue` pointer at the same time.

```
 w
[1,2,0]
 r   b
```
`white` pointer is now `1`. Just move `white` pointer to next.
```
   w
[1,2,0]
 r   b
```
`white` pointer is now `2`. Swap `2` with `0` at `blue` pointer. 

```
   w
[1,0,2]
 r   b
```
In this case, just move `blue` pointer only but let's move `white` and `blue` pointer.

```
     w
[1,0,2]
 r b
```
Now `white` pointer is greater than `blue` pointer. We stop iteration.
```
return [1,0,2]
```
That is wrong. Let's move `blue` pointer only.

```
   w
[1,0,2]
 r b
```
Now `white` pointer is pointing `0`, so swap `0` with the number at `red` pointer. Then move `red` and `white` to next.
```
     w
[0,1,2]
   b
   r

```
We stop iteration.
```
return [0,1,2]
```

Easy!\uD83D\uDE04
Let's see solution codes!

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$

```python []
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        red = 0
        white = 0
        blue = len(nums) - 1
        
        while white <= blue:
            if nums[white] == 0:
                nums[white], nums[red] = nums[red], nums[white]
                red += 1
                white += 1
            elif nums[white] == 1:
                white += 1
            else:
                nums[white], nums[blue] = nums[blue], nums[white]
                blue -= 1
```
```javascript []
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;
    
    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[white], nums[red]] = [nums[red], nums[white]];
            red++;
            white++;
        } else if (nums[white] === 1) {
            white++;
        } else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        int red = 0;
        int white = 0;
        int blue = nums.length - 1;
        
        while (white <= blue) {
            if (nums[white] == 0) {
                int temp = nums[white];
                nums[white] = nums[red];
                nums[red] = temp;
                red++;
                white++;
            } else if (nums[white] == 1) {
                white++;
            } else {
                int temp = nums[white];
                nums[white] = nums[blue];
                nums[blue] = temp;
                blue--;
            }
        }
    }
}
```
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int red = 0;
        int white = 0;
        int blue = nums.size() - 1;
        
        while (white <= blue) {
            if (nums[white] == 0) {
                swap(nums[white], nums[red]);
                red++;
                white++;
            } else if (nums[white] == 1) {
                white++;
            } else {
                swap(nums[white], nums[blue]);
                blue--;
            }
        }
    }
};
```

# Step by Step Algorithm

1. **Initialize Pointers**:
   - Three pointers are initialized: `red`, `white`, and `blue`.
   - `red` is initialized to 0 and will track the position where the next 0 should be placed.
   - `white` is initialized to 0 and will scan through the array.
   - `blue` is initialized to the last index of `nums` and will track the position where the next 2 should be placed.
   ```python
   red = 0
   white = 0
   blue = len(nums) - 1
   ```

2. **Process Elements in the Array**:
   - A while loop is used to process elements until `white` surpasses `blue`.
   ```python
   while white <= blue:
   ```

3. **Check the Value at the `white` Pointer**:
   - If `nums[white]` is 0, swap it with the element at the `red` pointer. This ensures that 0s are moved to the beginning of the array.
   - After the swap, increment both `red` and `white` pointers.
   ```python
   if nums[white] == 0:
       nums[white], nums[red] = nums[red], nums[white]
       red += 1
       white += 1
   ```
   - **Explanation**:
     - `nums[white]` is 0, so swap it with `nums[red]` to move the 0 to the beginning of the array.
     - Increment `red` because the next 0 should go to the next position.
     - Increment `white` to continue scanning the array.

4. **Check if `nums[white]` is 1**:
   - If `nums[white]` is 1, simply increment the `white` pointer.
   ```python
   elif nums[white] == 1:
       white += 1
   ```
   - **Explanation**:
     - `nums[white]` is 1, which is already in the correct place for the middle section.
     - Increment `white` to continue scanning the array.

5. **Check if `nums[white]` is 2**:
   - If `nums[white]` is 2, swap it with the element at the `blue` pointer. This ensures that 2s are moved to the end of the array.
   - After the swap, decrement the `blue` pointer.
   ```python
   else:
       nums[white], nums[blue] = nums[blue], nums[white]
       blue -= 1
   ```
   - **Explanation**:
     - `nums[white]` is 2, so swap it with `nums[blue]` to move the 2 to the end of the array.
     - Decrement `blue` because the next 2 should go to the previous position.
     - Note that we do not increment `white` here because we need to recheck the element at the `white` position after the swap.


---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F My other video #15 - 3sum

https://youtu.be/9HDVSJn3obo
