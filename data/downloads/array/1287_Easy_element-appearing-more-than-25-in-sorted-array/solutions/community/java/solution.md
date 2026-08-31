# [4 Minute Read] Mimicking an Interview

**Author:** dead_lock
**Votes:** 123
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/1399162/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/1399162/)

---

In this post, I would be discussing this problem with different approaches which you would come up in an interview in the manner of increasing difficulty. I will be writting this post in such a way as if I were the person being interviewed. So, enjoy \uD83D\uDE0A

<br>

> **Interviewer: Given the problem [Element Appearing More Than 25% In Sorted Array](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array). How would you approach to solve it?**
> 

*[**My mind**] Huh! child's play!* \uD83D\uDE0F

Quickly coming up with the brute force \uD83D\uDE01.


<br>

**1. For every element count the occurance of that element and check it's count**
I can use 2 pointers, say `i` and `j`, where for each `i`, I would iterate over the array using `j` and counting the occurances of the element at `i`, i.e. `arr[i]`. If the count turns out to be greater than 25% of the length of the array, i.e. `count > n / 4` (`n` is the length of the array), I would return `arr[i]` as my required element.

Below is the Java Code using the above algorithm 
```java
class Solution {
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        for(int i = 0; i < n; i++) {
            int count = 0;
            for(int j = 0; j < n; j++) {
                if(arr[i] == arr[j]) count++;
            }
            if(count > n / 4) return arr[i];
        }
        return -1;
    }
}
```
The time complexity of this approach would be O(n<sup>2</sup>) and the space complexity would be O(1).

<br>

> **Interviewer: Okay, but that's too slow, can you optimize it?**
> 

*[**My mind**] I knew this would be comming* \uD83D\uDE0F

Acting to think \uD83E\uDD14........ and then, coming up with the second approach

<br>

**2. Counting the frequency of all the elements, and then checking the frequency**
We would maintain a `map` or a `freq` array, in which we would keep the count of each element. Once we have counted all the elements, we would iterate through our `map` or `freq` array, and would check which element has it's count greater than `n / 4`, and return that element.

Below is the Java Code using the above algorithm
```java
class Solution {
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        int freq[] = new int[1_00_001];
        for(int i : arr) {
            freq[i]++;
        } 
        for(int i = 0; i < freq.length; i++) {
            if(freq[i] > n / 4) return i;
        }
        return -1;
    }
}
```
The time complexity of this approach would be O(n) and the space complexity would be O(n).

<br>

> **Interviewer: Okay, but you can't use any extra space. Can you come up with the same time complexity without using any auxilary space?**
> 

*[**My mind**] Guess whatt.... I knew this would also be coming* \uD83D\uDE0F

Again a bit of pretending to think \uD83E\uDD14........ and then quickly coming up with the approach.

<br>

**3. Iterating over the array and increasing it's freq if it's equal to it's previous element.**
Since the array is sorted, the elements which would be equal would be adjacent to each other. So we would keep track of the previous element (`prev`) we have seen. If the current element is equal to the previous element we would increase our `count`. If it's not equal, then we would reset `prev` to current element and `count` to `1`.
If at any instance, our `count > n / 4` we would return our current element as the required value.

Below is the Java Code using the above algorithm
```java
class Solution {
    public int findSpecialInteger(int[] arr) {
        int count = 0;
        int n= arr.length;
        int prev = -1;
        int req = n / 4;
        for(int i : arr) {
            if(i == prev) {
                count++;
            }
            else {
                prev = i;
                count = 1;
            }
            if(count > req) {
                return i;
            }
        }
        return -1;
    }
}
```

The time complexity of this approach would be O(n) and the space complexity would be O(1).

<br>

> **Interviewer: Nice, but it's yet slow, can you reduce it further?**
> 

*[**My mind**] Whhattt! where did this come from* \uD83D\uDE1F

This time really thinking \uD83E\uDD14........ and suddenly noticing that array is sorted.

<br>

**4. Checking the first and last index of occuring of the elements at position n / 4, (2 * n) / 4 and (3 * n) / 4**
The logic is, let's say we divide the array into 4 parts, i.e. the first part will be from `[0, n / 4]`, second from `[n / 4, (2 * n) / 4]`, third from `[(2 * n) / 4, (3 * n) / 4]` and fourth from `[(3 * n) / 4, n - 1]`. Now, whatever would be our required element should be at one of the index `n / 4` or `(2 * n) / 4` or `(3 * n) / 4`. Let's call these indices as our `special` indices. The answer should be at one of our `special` indices because, these indices are the marked at 25% intervals of the array, and since the required element is the one having occurance more than 25% and the array is sorted, so the required element must be present at one of our `special` points.
Now, we need to verify for our 3 `special` index, if the element at current index, say `i`, is a valid required element or not. Dealing with that is fast if we use Binary Search. We can find the first index of occurance of element `arr[i]` which would be the `lower_bound` of `arr[i]`, say `l`, and similarly find last index of occurance of element `arr[i]` which would be the `upper_bound` of `arr[i]`, say `r`. The frequency of `arr[i]` hence would be `r - l + 1`, and we could check if it's greater than `n / 4`.

Below is the Java Code using the above algorithm
```java
class Solution {
    public int bin_find1(int arr[], int val) {
		// for finding lower bound
        int l = 0, r = arr.length - 1;
        int ans = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(arr[mid] >= val) {
                ans = mid;
                r = mid - 1;
            }
            else l = mid + 1;
        }
        return ans;
    }
    public int bin_find2(int arr[], int val) {
		// for finding upper bound
        int l = 0, r = arr.length - 1;
        int ans = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(arr[mid] <= val) {
                ans = mid;
                l = mid + 1;
            }
            else r = mid - 1;
        }
        return ans;
    }
    public boolean valid(int arr[], int ind) {
        int n = arr.length;
        int start = bin_find1(arr, arr[ind]);
        int end = bin_find2(arr, arr[ind]);
        if(end - start + 1 > n / 4) return true;
        return false;
    }
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        int first = n / 4;
        int second = n / 2;
        int third = 3 * n / 4;
        
        if(valid(arr, first)) return arr[first];
        else if(valid(arr, second)) return arr[second];
        else if(valid(arr, third)) return arr[third];
        return -1;
    }
}
```
The time complexity of this approach would be O(6 * log(n)) (finding upper and lower bound would O(log(n)) each and repeating same for 3 elements) and the space complexity would be O(1).

<br>

> **Interviewer: Very Nice, but can you reduce time complexity further to O(3 * log(n))**
> 

*[**My mind**] Not again!.... I am really getting frustated at this guy now!* \uD83D\uDE21

Thinking for a while again \uD83E\uDD14........ scratching my head again and again.

> **Interviewer: Okay, let me give you a hint, do you really need to find the upper_bound once you know the lower_bound of the element?**
> 
*[**My mind**] I can't get what he is saying, seems like I won't make into my dream company.*

Thinking for a over and over again \uD83E\uDD14........ and suddenly got an idea.

<br>

**5. Checking the first `index` of occurance of the elements at position n / 4, (2 * n) / 4 and (3 * n) / 4 and directly comparing with element at `index + n / 4`**
Since we only need to find if an element occurs more than `n / 4` times, we just care about the first index of the occurance of element, say `index` , and if the element at `index + n / 4` (because `[index, index + n / 4]` are total `(n / 4) + 1` elements), if they both are same, `arr[index]` is our answer. And since we are finding only the `lower_bound` our time complexity would now be O(log(n)) for one element, instead of O(2 * log(n)) in previous approach.

Below is the Java Code using the above algorithm
```java
class Solution {
    public int bin_find1(int arr[], int val) {
		// to find the lower bound
        int l = 0, r = arr.length - 1;
        int ans = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(arr[mid] >= val) {
                ans = mid;
                r = mid - 1;
            }
            else l = mid + 1;
        }
        return ans;
    }
    public boolean valid(int arr[], int ind) {
        int n = arr.length;
        int start = bin_find1(arr, arr[ind]);
        if(arr[start + (n / 4)] == arr[ind]) return true;
        return false;
    }
    public int findSpecialInteger(int[] arr) {
        int n = arr.length;
        int first = n / 4;
        int second = n / 2;
        int third = 3 * n / 4;
        
        if(valid(arr, first)) return arr[first];
        else if(valid(arr, second)) return arr[second];
        else if(valid(arr, third)) return arr[third];
        return -1;
    }
}
```
The time complexity of this approach would be O(3 * log(n)) (finding lower bound would O(log(n)) each and repeating same for 3 elements) and the space complexity would be O(1).

<br>

> **Interviewer: Nice, so we are done with the interview, thanks for joining**
> 

*[**My mind**] Finally done! Hope I get my dream job* \uD83E\uDD1E

<br> 

**Thank you for giving your time in reading this post. Like if you feel so. Also, share your feedbacks and suggestions.**



