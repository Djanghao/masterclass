# What if we don't sort the queries?

**Author:** navid
**Votes:** 24
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3624630/](https://leetcode.com/problems/maximum-sum-queries/solutions/3624630/)

---

# Intuition (Preprocessing)
Let's preprocess the arrays before looking at the queries:

We find all the possible sums and keep them sorted. For each sum, we keep the `num1`s that made that `sum` in the sorted order as well.


# Example (Preprocessing)



Let's consider the first example of the question: 
`nums1 = [4,3,1,2]` 
and 
`nums2 = [2,4,9,5]`

The sum will be:

`sum = [6, 7, 10, 7]`


This is what our TreeMap `sumToSortedNum1s` will look like after preprocessing:

`sumToSortedNum1s =`
`{6->{4} , 7-> {2,3}, 10->{1}}`

**Note:** Don't worry if you don't know what TreeMap is. I'll explain in the **Data Structure** Section.

Each `sum` has a list or set of sorted `num1`s which we call it `sortedNum1s`. If it doesn't confuse you, we call the whole thing `sumToSortedNum1s` which in Java is a TreeMap.

In case you are not clear on how the TreeMap is created, index 0 in `nums1` which is 4 contributed to making `sum=6` so `sortedNum1s` for `6` will be `4` which makes `6->{4}`. Index 1 and 3 in nums1 (which have the value of 3 and 2), contributed to creating the sum of 7. So `sortedNum1s` for 7 will be `{2,3}` which makes: `7->{2,3}`.


# Intuition (Processing each query)

Then we can look at each query: we are looking for the max sum that satisfies the condition for each query. So we check if the biggest sum satisfies the condition. If yes, we return that sum happily; otherwise, we check the lower sum. 

But how do we check if that sum satisfies the condition?



# Approach
For each sum, we stored all the `num1s` which created that `sum` in the corresponding set or list for that `sum` and call it `sortedNum1s`.  We find the smallest `num1` in `sortedNum1s` for that `sum` which is greater than or equal to `x` (`query[0] = x`).  If such an element exists, then there's some hope that it is the ideal match. Now we should look at the other condition. We extract `num2 = sum - num1`. Then check the other condition `num2 >= y` and as you know: `y=query[1]`. If that's the case, we cheer loudly and return the winner: `sum`.

Otherwise, we will not look at other `num1`s in the `sortedNum1s` for that `sum` anymore. **Why not?**

Since we found the smallest possible `num1` that satisfied the condition (`num1>=x`), it is guaranteed that our `num2` is maximized. So if our `num2` doesn't satisfy the condition (`num2>=y`), then we don't waste more time digging into other elements of that `sortedNum1s`, and instead spend the saved time having fun at the beach.




# Data Structure

TreeSet is a set (similar to HashSet) that all elements are sorted. So finding an element in TreeSet takes `O(log n)`. Surprise! Surprise: In Java, TreeSet is Called TreeSet. 

TreeMap is similar to a Map (HashMap or HashTable), but the keys are sorted. so given a key, you can find its value in `O(log n)`. You won't be able to guess what TreeMap is called in Java.

So this is what we have:
`TreeMap<Integer, TreeSet<Integer>>`


If your programming language doesn't have a data structure similar to TreeMap, you can implement it yourself by creating a class that has one integer (`sum`) and one sorted list of `num1`s called `sortedNum1s`. Then you can keep those objects in a list sorted by `sum`. However, in that case, I strongly recommend yelling at the people who created your programming language for not implementing TreeMap and starting to write code in Java to give them a lesson.


# Complexity

##### Time complexity (Preprocessing):

For the preprocessing (creating the TreeMap), it takes us `n` times to go through the `nums1` and `nums2` arrays. Since each sum is generated based on adding one index in `num1` and `num2`, the length of `sum` will be at most `n`. In that case, we need `log n` to insert the new sum into the sorted sum map (or list depending on the implementation). But that's not all: for that `sum`, we also need to insert `num1` into its `sortedNum1s` list (`TreeSet` in Java) which will take another `log n`. So the preprocessing will be: `O(n * log n * log n)`.

##### Time complexity (Checking each query):

Then for each query, in the worst case, we'll look at all `n` elements in the sum, and for each sum, we find the `num1` in the sorted array that can have at most `n` elements, so the time complexity will be `O(q * n * log n)` .

### Advanced Time complexity (do **NOT** read):

**Warning:** You might become more confused! 

If you mention the above time complexity in the interview, it will be good enough to pass the interview for senior software engineering positions: we have `n` sum and for each sum, we have a sorted list of `num1`s which has at most `n` elements. So for each query, the time complexity will be `O(n * log n)` in the worst case. Right?

**Super Short Answer**: Nope!

**Short Answer**: Each element in `nums1` will contribute to creating only one `sum`, and the same `num1` with the same index in `nums1` will not appear in more than one `sum`. So even in the worst case, the total length of all `sortedNum1s` in all `sum`s will be at most `n` elements; So the time complexity for each query will be `O(n)` **not** `O(n * log n)`. 
More accurately, if the number of the distinct `sum` is `m`, the average length of each `sortedNum1s` in each `sum` will be `d=n/m`  so the time complexity will be `O(m log d)`.

**Long Answer**: Let's assume our `nums1` input is `nums1={1,2,3,4}`. 

1) First, let's try to change `nums2` so that the number of distinct elements in the `sum` is maximized. It's not that hard: for example, we can have `nums2={10,10,10,10}` which makes `sum={11,12,13,14}` and the TreeMap will be: `sumToNum1={11->{1} , 12->{2} , 13->{3} , 14->{4}}`. But as you can see, there's only one element for each `sortedNum1s` in each `sum` that contributed to making that `sum`. Can you come up with another `nums2` in which `sum` has `n` element and one of the `sortedNum1s` has more than one `num1`? Hell no!In this case, `m == n` and we check all `m` elements in the sum. So the time complexity will be `O(n)`.


2) Now let's try to maximize the size of a `sortedNum1s` for one specific `sum`. What should the input array `nums2` look like so that for `nums1={1,2,3,4}`, the `sortedNum1s` for `sum=15` is maximized?
Yes, you are correct: `nums2={14,13,12,11}`. Now try to make another sum other than `15` out of `nums1` and `nums2`... 
Try harder ... Nice try! But as you see, there will be only that one sum with `n` elements. The `sum` will be: `{15}` and the TreeMap will be: `{15->{1,2,3,4}}}`. 
In this case `m==1` and `d==n` so the time complexity will be `O(m log d) = O(1 * log n) = O(log n)` 







##### Space complexity:
`O(n^2)`

### **Advanced** Space complexity:
`O(n)`

# The Most Difficult Challenge in History

Now here's the question for you: Is the time complexity of preprocessing actually `O(n * log n * log n)`? 
Please comment below for a chance to win a BMW.
Note: As mentioned in the Terms and Conditions, the chance of winning a BMW is less than `0.000000000000000000000001%`. 
Good luck.


# Shout-out:

A special thanks to @DCXiaoBing for their suggestions.


# Code
```   
public int[] maximumSumQueries(int[] nums1, int[] nums2, int[][] queries) {
    int[] result = new int[queries.length];
    TreeMap<Integer, TreeSet<Integer>> sumToSortedNum1 = createTreeMap(nums1, nums2);
    for (int i = 0; i < result.length; i++) {
        result[i] = getMax(sumToSortedNum1, queries[i]);
    }
    return result;
}

private TreeMap<Integer, TreeSet<Integer>> createTreeMap(int[] nums1, int[] nums2) {
    TreeMap<Integer, TreeSet<Integer>> sumToSortedNum1 = new TreeMap<>();
    for (int i = 0; i < nums1.length; i++) {
        int num1 = nums1[i];
        int num2 = nums2[i];
        int sum = num1 + num2;
        if (!sumToSortedNum1.containsKey(sum)) {
            sumToSortedNum1.put(sum, new TreeSet<>());
        }
        sumToSortedNum1.get(sum).add(num1);
    }
    return sumToSortedNum1;
}

private int getMax(TreeMap<Integer, TreeSet<Integer>> sumToSortedNum1, int[] query) {
    int x = query[0];
    int y = query[1];
    Integer sum = sumToSortedNum1.lastKey();
    while (sum != null && sum >= x + y) {
        TreeSet<Integer> sortedNum1s = sumToSortedNum1.get(sum);
        Integer num1 = sortedNum1s.ceiling(x);
        if (num1 != null && num1 >= x) {
            int num2 = sum - num1;
            if (num2 >= y) {
                return sum;
            }
        }
        sum = sumToSortedNum1.lowerKey(sum);
    }
    return -1;
}
```