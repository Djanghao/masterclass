# ✅ ❤️ SUPER Easy Solution With Kotlin 🔥 JAVA 🔥  Using Set 🔥 Super Friendly 🔥

**Author:** sachin-worldnet
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3481970/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/3481970/)

---

Simple Solution 



```Java []
public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {

    Set<Integer> s1 = new HashSet(Arrays.asList(nums1));
    Set<Integer> s2 = new HashSet(Arrays.asList(nums2));

    ArrayList<Integer> nums1Distinct = new ArrayList<>();

    for(int num: s1){
        if(!s2.contains(num)){
            nums1Distinct.add(num);
        }else{
            s2.remove(num);
        }
    }
    return Arrays.asList(nums1Distinct, new ArrayList<>(s2));
}
```
```Kotlin []
class Solution {
    fun findDifference(nums1: IntArray, nums2: IntArray): List<List<Int>> {
        val s1 = nums1.toMutableSet()
        val s2 = nums2.toMutableSet()
        val nums1Distinct = arrayListOf<Int>()

        s1.forEach{
            if(!s2.contains(it))
                nums1Distinct.add(it)
            else{
                s2.remove(it)
            }
        }
        return listOf(nums1Distinct, s2.toList())
    }
}
```


# Intuition
- We aim to find the difference between two arrays and return the result in the form of two lists.
- To accomplish this, we can convert both input arrays into `Sets` to remove duplicates, and then iterate over one `Set` to check if each element is present in the other `Set`.
- If an element is present in the other `Set`, we remove it from that `Set`.
- If an element is not present in the other `Set`, we add it to a result `List`.

---


# Approach
1. Start by initializing two mutable sets, `s1` and `s2`, to represent the unique elements of `nums1` and `nums2`, respectively.
- Initialize an empty `ArrayList`, `nums1Distinct`, to store the elements that are present in `s1` but not in `s2` *(Avoid utilizing unncessory memory)*.
3. Iterate over the elements in `s1`, and for each element:
    * Check if `s1` element  is present in `s2`.
        * If it is present in `s2`, remove it from `s2`. ***(This is why we don't need additional array for distinct element for `nums2`)***
        * If it is not present in `s2`, add it to `nums1Distinct`.
4. Finally, return the result as a list containing `nums1Distinct` and the remaining elements of `s2` converted to a `list`.

---



# Complexity
- ## Time complexity: $$O(n)$$
1. Initializing two mutable sets `s1` and `s2 ->`$$O(n)$$, where n is the length of `nums1` or `nums2`.
2. Initializing an empty array list `n1 ->`$$O(n)$$.
3. Iterating over the elements in `s1 ->`$$O(n)$$.
4. For each element, checking if it is present in `s2 ->`$$O(n)$$ on average for `HashSet`.
5. If the element is present in `s2`, removing it from `s2 ->`$$O(n)$$ on average for `HashSet`.
6. If the element is not present in `s2`, adding it to `n1 ->`$$O(n)$$.
7. Converting `s2` to a `list ->`$$O(n)$$.
8. Returning the result as a list containing `n1` and the remaining elements of `s2 ->`$$O(n)$$.

Therefore, the overall time complexity of this algorithm is $$O(n)$$, where $$n$$ is the length of `nums1` or `nums2`.

- ## Space complexity: $$O(n)$$
The space complexity of this algorithm is also linear to the size of the input arrays. There are three data structures that use space:

1. `s1` and `s2` are mutable sets that store the distinct elements of `nums1` and `nums2` respectively. The space used by each set is proportional to the number of distinct elements in the corresponding input array. In the worst case, when all elements in the input arrays are unique, the size of each set will be $$n$$, where $$n$$ is the length of the input arrays. Therefore, the space used by both sets combined is $$O(n)$$.
2. `nums1Distinct` is an `ArrayList` that stores the elements that are present in `s1` but not in `s2`. The space used by this `list` is proportional to the number of elements that are unique to nums1, which is at most $$n$$. Therefore, the space used by `nums1Distinct` is also $$O(n)$$.
3. The output list contains two lists, `nums1Distinct` and the remaining elements of `s2`. As discussed earlier, the combined size of these two lists is at most $$n$$. Therefore, the space used by the output list is also $$O(n)$$.
Therefore, the overall space complexity of this algorithm is $$O(n)$$.


---


## Conclusion
In summary, this algorithm finds the difference of two `arrays` and returns the result as two `lists` of distinct elements. It achieves a time complexity of $$O(n)$$ and a space complexity of $$O(n)$$. The solution is simple and intuitive, leveraging the built-in data structure `HashSet` in `Kotlin` and `Java` to efficiently **remove** duplicates and check `Set` membership.

---


## \u2764\uFE0F Happy Coding \u2764\uFE0F

## Please UpVote \uD83D\uDC4D



---


