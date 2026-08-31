# ✅💯🔥Explanations No One Will Give You🎓🧠3 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 103
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5532275/](https://leetcode.com/problems/sort-an-array/solutions/5532275/)

---

<blockquote>
        <p>
            <b>
                A year from now you may wish you had started today.
            </b>        
        </p>
        <p>
            --- Karen Lamb ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a list of integers `nums` and is asked to sort it. That's all, but you're not allowed to use built-in sort functions.

## \uD83D\uDCE5\u2935\uFE0F Input:
- Integer array `nums`

## \uD83D\uDCE4\u2934\uFE0F Output:
Sorted array `nums`

---

# 1\uFE0F\u20E3\uD83E\uDD18 Approach 1: Quick Sort [Fu**ing TLE]

# \uD83E\uDD14 Intuition
Okay guys, someone have been talking about that in problems about sorting you need to write your own sorting function, at least for this problem I agree with you. I think it's ideal chance for us yo learn some sorting algorithms today, I'll cover here 3 options - Quick Sort, Merge Sort and Counting Sort. Let's start with first one.

- Okay, let's think about how quick sort is working (in fact, this algorithm is broadly used in many languages since its perfomance where a stable sort is not needed):
    - Quick Sort resembles to Merge Sort, it's also recursive and also use `divide and conquer` principe, algorithm works with these steps in general:
    1. Choose `pivot` - this is the number for which we will find `correct` location (where it will end after sotring whole array). What we know need to be true for this number after we foud its `correct` index is that: 1. All numbers to left are less than this number 2. All numbers to right are greater than or equal to this number. This ensures that position for this element was chosen correctly
    2. In fact, for algorithm it doesn't matter which element we will choose as a pivot, at most cases it's either first, last or middle element in the array. Formula to know which pivote would be the best doesn't exist, so it's just our luck whether we will choose good pivot. Exists technique where among those 3 elements you "sort" them and choose the middle as pivot, but, obviously this doesn't ensure that this is the best choice of pivot.
    3. I said that this algorithm is recursive, why? Because while we're looking for the pivot element index we're also "sorting" elements based on whether they smaller or bigger than pivot, than, when we place pivot in its place we know that at right all elements are bigger and at left they're all smaller, but we don't know whether they're sorted, so we call recursively QuickSort function on both left and right sides from our pivot. 

## Here's quick sort animation (not mine, source: [opengenus](https://iq.opengenus.org/quick-sort/))

<img src="https://iq.opengenus.org/content/images/2018/02/quick_sort.gif" width="80%">


Also here's youtube video with example explanation: [video](https://youtu.be/Vtckgz38QHs?si=zTsYybILkYyioFCG)

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Define the `partition` function to rearrange the elements around a pivot:
  - Choose a random pivot within the range `[low, high]`.
  - Initialize `write_ind_smaller` to `low` for elements smaller than the pivot.
  - Initialize `write_ind_greater` to `high` for elements greater than the pivot.
  - Use `cur` to iterate through the array from `low` to `write_ind_greater`.
  - Compare each element `num` at index `cur` with the pivot:
    - If `num` is smaller than the pivot, swap it with the element at `write_ind_smaller`, then increment both `write_ind_smaller` and `cur`.
    - If `num` is greater than the pivot, swap it with the element at `write_ind_greater`, then decrement `write_ind_greater`.
    - If `num` is equal to the pivot, just increment `cur`.
  - Return the index `write_ind_smaller` as the position of the pivot.
- Define the `quick_sort` function to recursively sort the array:
  - Base case: If the range `[low, high]` is empty or has one element, return.
  - Call the `partition` function to partition the array and get the pivot index.
  - Recursively apply `quick_sort` to the left part `[low, pivot_ind - 1]`.
  - Recursively apply `quick_sort` to the right part `[pivot_ind + 1, high]`.
- In the `Solution` class:
  - Call the `quick_sort` function to sort the input array `nums`.
  - Return the sorted array `nums`.

# \uD83D\uDCD9 Complexity Analysis
- \u23F0 Time complexity: O(n^2), basically average time complexity of quicksort is O(n * log n) but here's the worst case where the array is already sorted (For this implemantation the worst case is very unlikely to occur, quicksort perfomance is VERY dependable on how you choose your pivot index and I wrote randomized quicksort which choose random pivot index so it's very unlikely to every time choose the biggest or the smallest element)
- \uD83E\uDDFA Space complexity: O(n), though average time complexity is O(log n) but in the worst scenario (array sorted, or as dumb testcase 17 where there're just too many 2) this is O(n) due to recursion call

# \uD83D\uDCBB Code (works but gives TLE, so I decided to leave it only in Python to not waste my time)
``` python []
from random import randint


def partition(array: list[int], low: int, high: int) -> int:
    # this is function for choosing pivot and partitate the array
    pivot: int = array[randint(low, high)]
    write_ind_smaller: int = low  # where to write elements smaller than pivot
    write_ind_greater: int = high  # where to write elements greater than pivot
    cur = low

    while cur < write_ind_greater + 1:
        num = array[cur]
        if num < pivot:
            array[write_ind_smaller], array[cur] = array[cur], array[write_ind_smaller]
            write_ind_smaller += 1
            cur += 1
        elif num > pivot:
            array[write_ind_greater], array[cur] = array[cur], array[write_ind_greater]
            write_ind_greater -= 1
        else:
            cur += 1

    return write_ind_smaller  # return index of the pivot


def quick_sort(array, low, high) -> None:  # [low, high]
    # Base case: if range is empty or contains only 1 element
    if low >= high:
        return

    pivot_ind: int = partition(array, low, high)
    quick_sort(array, low, pivot_ind - 1)  # left part
    quick_sort(array, pivot_ind + 1, high)  # right part


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        quick_sort(nums, 0, len(nums) - 1)
        return nums
```

# 2\uFE0F\u20E3\uD83C\uDFC6 Approach 2: Merge Sort

# \uD83E\uDD14 Intuition
- Merge sort is quite resemble to quick sort but uses another technique - here we want to break our array on subarrays with 1 elements and then recursively reconstruct our array sorted.
- You break problem on smaller parts - first break it on sorted arrays with 1 element, then "merge" this arrays comparing their elements one-by-one.
- This works because we know that these smaller parts are already sorted when they came back from recursive function.
- Unlike the quick sort here we do need to create new arrays so space complexity will be bigger in the average case.

Here's very good animation how merge sort works: (source: [wikimedia](https://commons.wikimedia.org/wiki/File:Merge-sort-example-300px.gif))

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210" width="80%">

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Define the `merge_sort` function to sort an array:
  - Get the length `n` of the array.
  - If `n` is 1 or less, return as the array is already sorted.
  - Calculate the middle index `midle_ind`.
  - Split the array into `left_part` and `right_part`.
  - Recursively call `merge_sort` on `left_part` and `right_part`. By the time we call it here this arrays will be already sorted
  - Merge the sorted `left_part` and `right_part` back into the original array using the `merge` function.
- Define the `merge` function to merge two sorted arrays:
  - Initialize pointers `p1` and `p2` to 0 for `array1` and `array2`.
  - Initialize `n1` and `n2` for the lengths of `array1` and `array2`.
  - Initialize `write_ind` to 0 for the position in `source_array`.
  - While either `p1` or `p2` is within bounds:
    - If `p1` is out of bounds or `array2[p2]` is smaller than `array1[p1]`, copy `array2[p2]` to `source_array` and increment `p2`.
    - If `p2` is out of bounds or `array1[p1]` is less than or equal to `array2[p2]`, copy `array1[p1]` to `source_array` and increment `p1`.
    - Increment `write_ind`.
- In the `Solution` class:
  - Call the `merge_sort` function to sort the input array `nums`.
  - Return the sorted array `nums`.

# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n * log n), in any case we divide array in half up to arrays of size 1 and then perform sorting an smaller parts so even in the worst case time complexity is still will be O(n * log n)
- \uD83E\uDDFA Space complexity: O(n), since we're creating new `n` arrays of size 1 and also there some recursion stack space

# \uD83D\uDCBB Code
``` python []
def merge_sort(array: list[int]) -> None:
    n: int = len(array)
    if n <= 1:
        return
    midle_ind: int = n // 2
    left_part: list[int] = array[:midle_ind][:]
    right_part: list[int] = array[midle_ind:][:]

    merge_sort(left_part)
    merge_sort(right_part)
    merge(left_part, right_part, array)


def merge(array1: list[int], array2: list[int], source_array: list[int]) -> None:
    p1: int = 0
    p2: int = 0
    n1: int = len(array1)
    n2: int = len(array2)
    write_ind = 0

    while p1 < n1 or p2 < n2:
        if p1 == n1 or (p2 != n2 and array2[p2] < array1[p1]):
            source_array[write_ind] = array2[p2]
            p2 += 1
        elif p2 == n2 or array1[p1] <= array2[p2]:
            source_array[write_ind] = array1[p1]
            p1 += 1
        write_ind += 1


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        merge_sort(nums)
        return nums
```
``` C++ []
void merge(vector<int>& array, int low, int mid, int high) {
    int n1 = mid - low + 1;
    int n2 = high - mid;
    vector<int> left_part(n1), right_part(n2);

    for (int i = 0; i < n1; ++i)
        left_part[i] = array[low + i];
    for (int i = 0; i < n2; ++i)
        right_part[i] = array[mid + 1 + i];

    int p1 = 0, p2 = 0, write_ind = low;
    while (p1 < n1 && p2 < n2) {
        if (left_part[p1] <= right_part[p2]) {
            array[write_ind] = left_part[p1++];
        } else {
            array[write_ind] = right_part[p2++];
        }
        ++write_ind;
    }

    while (p1 < n1)
        array[write_ind++] = left_part[p1++];

    while (p2 < n2)
        array[write_ind++] = right_part[p2++];
}

void merge_sort(vector<int>& array, int low, int high) {
    if (low >= high)
        return;

    int mid = low + (high - low) / 2;
    merge_sort(array, low, mid);
    merge_sort(array, mid + 1, high);
    merge(array, low, mid, high);
}

class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        merge_sort(nums, 0, nums.size() - 1);
        return nums;
    }
};

```
``` JavaScript []
var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

function mergeSort(array, low, high) {
    if (low >= high) return;
    
    const mid = Math.floor((low + high) / 2);
    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    merge(array, low, mid, high);
}

function merge(array, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    const leftPart = array.slice(low, mid + 1);
    const rightPart = array.slice(mid + 1, high + 1);
    
    let p1 = 0, p2 = 0, writeInd = low;
    
    while (p1 < n1 && p2 < n2) {
        if (leftPart[p1] <= rightPart[p2]) {
            array[writeInd++] = leftPart[p1++];
        } else {
            array[writeInd++] = rightPart[p2++];
        }
    }
    
    while (p1 < n1) {
        array[writeInd++] = leftPart[p1++];
    }
    
    while (p2 < n2) {
        array[writeInd++] = rightPart[p2++];
    }
}
```
``` Java []
class Solution {
    public int[] sortArray(int[] nums) {
        mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    private void mergeSort(int[] array, int low, int high) {
        if (low >= high) {
            return;
        }
        int mid = low + (high - low) / 2;
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        merge(array, low, mid, high);
    }

    private void merge(int[] array, int low, int mid, int high) {
        int n1 = mid - low + 1;
        int n2 = high - mid;
        int[] leftPart = new int[n1];
        int[] rightPart = new int[n2];

        System.arraycopy(array, low, leftPart, 0, n1);
        System.arraycopy(array, mid + 1, rightPart, 0, n2);

        int p1 = 0, p2 = 0, writeInd = low;
        while (p1 < n1 && p2 < n2) {
            if (leftPart[p1] <= rightPart[p2]) {
                array[writeInd++] = leftPart[p1++];
            } else {
                array[writeInd++] = rightPart[p2++];
            }
        }

        while (p1 < n1) {
            array[writeInd++] = leftPart[p1++];
        }

        while (p2 < n2) {
            array[writeInd++] = rightPart[p2++];
        }
    }
}
```
``` C []
void merge(int* array, int low, int mid, int high) {
    int n1 = mid - low + 1;
    int n2 = high - mid;
    int* left_part = (int*)malloc(n1 * sizeof(int));
    int* right_part = (int*)malloc(n2 * sizeof(int));

    for (int i = 0; i < n1; ++i)
        left_part[i] = array[low + i];
    for (int i = 0; i < n2; ++i)
        right_part[i] = array[mid + 1 + i];

    int p1 = 0, p2 = 0, write_ind = low;
    while (p1 < n1 && p2 < n2) {
        if (left_part[p1] <= right_part[p2]) {
            array[write_ind++] = left_part[p1++];
        } else {
            array[write_ind++] = right_part[p2++];
        }
    }

    while (p1 < n1)
        array[write_ind++] = left_part[p1++];

    while (p2 < n2)
        array[write_ind++] = right_part[p2++];

    free(left_part);
    free(right_part);
}

void merge_sort(int* array, int low, int high) {
    if (low >= high)
        return;

    int mid = low + (high - low) / 2;
    merge_sort(array, low, mid);
    merge_sort(array, mid + 1, high);
    merge(array, low, mid, high);
}

int* sortArray(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    merge_sort(nums, 0, numsSize - 1);
    return nums;
}
```


# 3\uFE0F\u20E3\uD83C\uDF1F Approach 3: Counting Sort

# \uD83E\uDD14 Intuition
- I don't know how on Earth author decided to cut the quick sort with 17 test case and allow counting sort to work here and not throw memory limit exceeded
- I saw many questions about how sorting in O(n) could exist and why this is works - okay guys, this is works, but works very limited. The problem is, counting sort is supposed to store counting for EVERY possible value in the array, it means that if you can have very large integers like -10^9 and 10^9 you MUST allocate memory for 2 * 10^9 + 1 numbers which is very much memory and now assume you need tens times more for larger numbers - but, because constaints says `-5 * 10^4 <= nums[i] <= 5 * 10^4` we need only `2 * 5 * 10^4 + 1` cells for storing values which is not that big.
How this works? You just count elements and store their counting, then you go through your counting list from smallest to biggest elements and add to your array as many elements of this as needed - this is it, no hard partition or sort, just counting.


Today I'm showing a lot of animations, so let's look at one more (source: [Github explanations](https://github.com/Lugriz/typescript-algorithms/blob/master/src/algorithms/sorting/counting-sort/README.md))

<img src="https://camo.githubusercontent.com/5422ea175c8af5e1538e1e9ec2b714fa9acc27b211c4978d463a60fd399f2f14/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d6a4a63686c7931426b54632f574c4771434644647643492f41414141414141414148412f6c756c6a416c7a3270744d6e64495a4e48304b4c545475514d4e73667a44654651434c63422f73313630302f43536f72745570646174656453746570492e676966" width="80%">
<img src="https://camo.githubusercontent.com/02ac6776f263dcfe117a77edaf82175e305fb4774e3dc870731021dedd4ec2e2/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d317646752d5649526139592f574c4847755a6b644633492f41414141414141414148732f386a4b7532646251656534617039786c56634e73494c72636c7177305578415641434c63422f73313630302f537465702d49492e706e67" width="80%">
<img src="https://camo.githubusercontent.com/9654388769617ec8682b8e19aacc9729b223b5028727a0a288374fdd4fa91e2f/68747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d785071796c6e67714153592f574c47713370396e3976492f414141414141414141484d2f4a48647458416b4a593877597a444d4258787161726a6d687050684d3075384d41434c63422f73313630302f526573756c74417272617943532e676966" width="80%">



# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize a `counting` array with size `2 * 5 * 10^4 + 1` (to accommodate both positive and negative numbers) and fill it with zeros.
- Iterate through each element `num` in the input `nums` array:
- Increment the corresponding index in the `counting` array by adding `5 * 10^4` to `num` to handle negative values.
- Initialize `write_ind` to 0 to track the position in the original `nums` array for writing sorted values.
- Iterate through the `counting` array with index `number_ind` and frequency `freq`:
- While `freq` is not zero, write the value `(number_ind - 5 * 10^4)` back to the `nums` array, update `write_ind`, and decrement `freq`.
- Return the sorted `nums` array.

# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n), we go through each element in `nums` once and then go through frequency array (exactly 2 * 5 * 10^4 + 1 operations) 
- \uD83E\uDDFA Space complexity: O(1), we always use constant space (BUT BE CAREFUL! This just means our memory doesn't depend on input size but this doesn't mean that merge sort will use more memory than this, in fact, quite possible otherwise)

# \uD83D\uDCBB Code
``` python []
class Solution:
    def sortArray(self, nums: list[int]) -> list[int]:
        counting: list[int] = [0 for _ in range(2 * 5 * 10**4 + 1)]
        for num in nums:
            # we add 5 * 10^4 because for smallest possible element -5 * 10^4 index must be 0
            counting[num + 5 * 10**4] += 1
        write_ind: int = 0
        for number_ind, freq in enumerate(counting):
            while freq != 0:
                nums[write_ind] = number_ind - 5 * 10**4
                write_ind += 1
                freq -= 1

        return nums
```
``` C++ []
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        vector<int> counting(2 * 50000 + 1, 0);
        for (int num : nums) {
            // we add 5 * 10^4 because for smallest possible element -5 * 10^4 index must be 0
            counting[num + 50000]++;
        }
        int write_ind = 0;
        for (int number_ind = 0; number_ind < counting.size(); ++number_ind) {
            int freq = counting[number_ind];
            while (freq != 0) {
                nums[write_ind] = number_ind - 50000;
                write_ind++;
                freq--;
            }
        }
        return nums;
    }
};
```
``` JavaScript []
var sortArray = function(nums) {
    let counting = new Array(2 * 50000 + 1).fill(0);
    for (let num of nums) {
        // we add 5 * 10^4 because for smallest possible element -5 * 10^4 index must be 0
        counting[num + 50000]++;
    }
    let writeInd = 0;
    for (let numberInd = 0; numberInd < counting.length; numberInd++) {
        let freq = counting[numberInd];
        while (freq != 0) {
            nums[writeInd] = numberInd - 50000;
            writeInd++;
            freq--;
        }
    }
    return nums;
};
```
``` Java []
class Solution {
    public int[] sortArray(int[] nums) {
        int[] counting = new int[2 * 50000 + 1];
        for (int num : nums) {
            // we add 5 * 10^4 because for smallest possible element -5 * 10^4 index must be 0
            counting[num + 50000]++;
        }
        int writeInd = 0;
        for (int numberInd = 0; numberInd < counting.length; numberInd++) {
            int freq = counting[numberInd];
            while (freq != 0) {
                nums[writeInd] = numberInd - 50000;
                writeInd++;
                freq--;
            }
        }
        return nums;
    }
}
```
``` C []
int* sortArray(int* nums, int numsSize, int* returnSize) {
    int max_size = 2 * 50000 + 1;
    int* counting = (int*)calloc(max_size, sizeof(int));
    int offset = 50000;
    for (int i = 0; i < numsSize; i++) {
        // we add 5 * 10^4 because for smallest possible element -5 * 10^4 index must be 0
        counting[nums[i] + offset]++;
    }
    int write_ind = 0;
    for (int number_ind = 0; number_ind < max_size; number_ind++) {
        int freq = counting[number_ind];
        while (freq != 0) {
            nums[write_ind] = number_ind - offset;
            write_ind++;
            freq--;
        }
    }
    free(counting);
    *returnSize = numsSize;
    return nums;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
