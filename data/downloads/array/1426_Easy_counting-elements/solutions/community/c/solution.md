# C++ || 9 different solutions

**Author:** heder
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-elements/solutions/2620052/](https://leetcode.com/problems/counting-elements/solutions/2620052/)

---

This problem is quite simple. I had way to much fun comming up with several different solutions. :) Please let me know if you can think of an approach I haven't covered here. I am also intersted if you can suggest a more elegant implementation for one of the existing solutions.

### Solution 1: linear search, nest loops

We can just do nested loops.

```cpp
    static int countElements(const vector<int>& arr) {
        int ans = 0;
        for (int a : arr)
            for (int b : arr)
                if (b == a + 1) {
                    ++ans;
                    break;
                }
        return ans;
    }
```

The same idea, without raw loops could look like this:

```cpp
    static int countElements(vector<int>& arr) {
        return count_if(begin(arr), end(arr), [&](int x) { 
            return find(begin(arr), end(arr), x + 1) != end(arr); 
        });
    }
```

**Complexity Analysis**
  * Time Complexity: $$O(n^2)$$
  * Space Complexity: $$O(1)$$

### Solution 2: hash map

Inserting all elements into a hash set allows us to make the decision if the ```x + 1``` is present in ```arr``` in constant time.

```cpp
    static int countElements(const vector<int>& arr) {
        unordered_set<int> seen;
        for (int a : arr) seen.insert(a);
        int ans = 0;
        for (int a : arr)
            ans += seen.count(a + 1);
        return ans;
    }
```

The same idea, without raw loops. If the input range would not be limited like for this problem, I would likely go with the following solution:

```cpp
    static int countElements(const vector<int>& arr) {
        unordered_set<int> seen(begin(arr), end(arr));
        return count_if(begin(arr), end(arr), [&](auto a) {
            return seen.count(a + 1);
        });
    }
```

**Complexity Analysis**
  * Time Complexity: $$O(n)$$ We scan ```arr``` twice, the hash set insert and lookup is $$O(1)$$.
  * Space Complexity: $$O(n)$$ for the hash set


### Solution 3: array, vector, bitset

The elements in ```arr``` will all be in the range of 0 to 1000. With that we can use a ```vector``` instead of a hash map, which is faster.

```cpp
    static int countElements(const vector<int>& arr) {
        vector<bool> seen(1024);
        for (int a : arr) seen[a] = true;
        return count_if(begin(arr), end(arr), [&](int x) { return seen[x + 1]; });
    }
```

Using an ```array``` instead of a ```vector``` has less overhead.

```cpp
    static int countElements(const vector<int>& arr) {
        array<bool, 1024> seen = {};
        for (int a : arr) seen[a] = true;
        return count_if(begin(arr), end(arr), [&](int x) { return seen[x + 1]; });
    }
```

The array is of size 1024 bytes, we can safe some memory by using ```bitset``` instead. _If the input range is as limited as for this problem, this solution is my favorite._

```cpp
    static int countElements(const vector<int>& arr) {
        bitset<1024> seen;
        for (int a : arr) seen[a] = true;
        return count_if(begin(arr), end(arr), [&](int x) { return seen[x + 1]; });
    }
```

**Complexity Analysis**
This is like solution 2, but the constant factors are smaller.

### Solution 4: frequency count / bucket sort (array)

Because the range of elements is limited we can do a frequency count, with that we need to scan the input array only once, and the actuall counting is happening on the frequency count. This approach seems quite pratical to me as well, esp. if the input array is very large.

```cpp
    static int countElements(const vector<int>& arr) {
        array<int, 1001> counts = {};
        for (int a : arr) ++counts[a];
        int ans = 0;
        for (int i = 0; i < size(counts) - 1; ++i)
            ans += counts[i + 1] ? counts[i] : 0;
        return ans;
    }
```

**Complexity Analysis**
  * Time Complexity: $$O(n)$$. If the size of the input array is small than the runtime will be dominated by scaning through ```count```.
  * Spae Complexity: $$O(1)$$ it's about 4k, but still $$O(1)$$.

### Solution 5: frequency count / bucket sort (hash map)

This is a variant of solution 4, if the input range would be less limited we could use a ```unordered_map``` and do something like this:

```cpp
    static int countElements(const vector<int>& arr) {
        unordered_map<int, int> counts;
        for (int a : arr) ++counts[a];
        int ans = 0;
        for (auto [k, v] : counts)
            if (counts.count(k + 1)) ans += v;
        return ans;
    }
```

**Complexity Analysis**
  * Time complexity: $$O(n)$$ we scan the input once, and worst case the hash map is the same number of elments as the input and we need to scan the hash map as well, but each lookup is constant time, so we end up again with $$O(n)$$.
  * Space complexity: $$O(n)$$ if all input elements are unique than the size of the hash map will grow liniearly with the size of the input.

### Solution 6: frequency count / bucket sort (map)

Another variant of solution 4 and 5 would be to use a map. The advantage is that we can just scan through the map to compute the answer, but the down side is that inserting into the map is a $$O(\\log n)$$ operation unlike the hash map from solution 5.

```cpp
    static int countElements(const vector<int>& arr) {
        if (empty(arr)) return 0;
        
        map<int, int> counts;
        for (int a : arr) ++counts[a];
        int ans = 0;
        for (auto it = next(begin(counts)), prev = begin(counts); it != end(counts); ++it, ++prev) {
            if (prev->first + 1 == it->first) {
                ans += prev->second;
            }
        }
        return ans;
    }
```

**Complexity Analysis**
  * Time complexity: $$O(n \\log n)$$ the time is spent inserting into the ```std::map```.
  * Space complexity: $$O(n)$$ we need the extra space for the ```std::map```.

### Solution 7: sort and group

If we sort the input we can then break it up in the groups of equal numbers and if the next element is then the successor of the previous one we have found a match.

```cpp
    static int countElements(vector<int>& arr) {
        sort(begin(arr), end(arr));
        int ans = 0;
        for (int l = 0, r = 1; r < size(arr); ++r) {
            // NB: We are not looking at the last group of
            // equal numbers because they don't count anyway.
            if (arr[r] != arr[l]) {
                if (arr[r] == arr[l] + 1) ans += r - l;
                l = r;
            }
        }
        return ans;
    }
```

Side note: If we wanted to look at all groups of equal numbers we would do something like this. Please note the ```r <= size(arr)``` part, and we start with ```r = 0```:

```cpp
        for (int l = 0, r = 0; r <= size(arr); ++r) {
            if (r == size(arr) || arr[r] != arr[l]) {
                // Do something with this group of equal numbers.
                l = r;
            }
        }
```


**Complexity Analysis**
  * Time complexity: $$O(n \\log n)$$ The time complexity is dominated by the sorting, the counting is then linear again.
  * Space complexity: $$O(1)$$

### Solution 8: sort and look ahead

Before we use binary search on the input we can just look for the next biggest number by scanning forward.

```cpp
    static int countElements(vector<int>& arr) {
        sort(begin(arr), end(arr));
        int ans = 0;
        for (int i = 0; i < size(arr); ++i) {
            // Look ahead to see if we find the next bigger number.
            for (int j = i + 1; j < size(arr); ++j) {
                if (arr[j] == arr[i] + 1) {
                    ++ans;
                    break;
                } else if (arr[j] > arr[i] + 1) {
                    break;
                }
            }
        }
        return ans;
    }
```

**Complexity Analysis**
  * Time complexity: Worst case is if all numbers are the same this is $$O(n^2)$$. For a less degraded case this is $$O(n \\log n)$$ because of sorting.
  * Space complexity: $$O(1)$$

### Solution 9: binary search

If we are willing to sort the input array, we can then also use binary search. This approach could also be used when the input is already sorted. Note that ```arr``` is modified, which might or might not be ok.

```cpp
    static int countElements(vector<int>& arr) {
        sort(begin(arr), end(arr));
        return count_if(begin(arr), end(arr), [&](int x) { 
            return binary_search(begin(arr), end(arr), x + 1); 
        });
    }
```

The part of the input we need to look for is getting smaller in each step, so we could do something like this:

```cpp
    static int countElements(vector<int>& arr) {
        sort(begin(arr), end(arr));
        int ans = 0;
        for (int i = 0; i < size(arr); ++i) {
            ans += binary_search(next(begin(arr), i), end(arr), arr[i] + 1);
        }
        return ans;
    }
```

**Complexity Analysis**
  * Time complexity: $$O(n \\log n) for sorting, but also then scan again and the binary search for each elements successor ($$x+1$$) is $$O(n \\log n)
  * Space complexity: $$O(1)$$ no extra space besides loop variables and the result.


### Appendix: parallel execution

We have been using ```std::count_if``` several times for different solutions above. ```std::count_if``` offers overloads that would allow parallel execution. It's not yet obvious to me why I couldn't get this to compile and LC. Will explore some more.

_As always: Feedback, questions, and comments are welcome. Please upvote if you like the post._

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/Nqm4jJcyBf)!**