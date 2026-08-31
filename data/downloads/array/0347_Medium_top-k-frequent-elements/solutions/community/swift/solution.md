# ✅ 3 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 38
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3426297/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3426297/)

---

# First solution using Dictionary

## Approach
This approach to solving the problem involves using a dictionary to count the *frequency* of each element in the input array, and then sorting the dictionary by value in *descending* order to obtain the top `k` *frequent* elements.

The function first creates an empty dictionary `frequencyDict` to store the frequency of each element in the input array. It then iterates over the input array, using the `default` parameter of the subscript operator to increment the value in the dictionary for each encountered element. This ensures that the dictionary always contains a value for each element, even if it hasn't been encountered yet.

Next, the function sorts the dictionary by value in descending order using the `sorted` function, which returns an array of key-value pairs. The sort closure is defined as `$0.value > $1.value`, which compares the values of each key-value pair and returns `true` if the first value is greater than the second. This ensures that the dictionary is sorted in *descending* order of frequency.

Finally, the function creates a result array `result` and appends the keys of the first `k` elements in the sorted dictionary to it using a for loop. It then returns the resulting array of top `k` *frequent* elements.

## Complexity
The *time complexity* of this approach is $$O(n \\cdot \\log n)$$ due to the sorting operation, where $$n$$ is the length of the input array.

The *space complexity* is also $$O(n)$$, where $$n$$ is the length of the input array, due to the use of a dictionary to store the *frequency* of each element.

## Code

```swift
class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var frequencyDict = [Int: Int]()
        for num in nums {
            frequencyDict[num, default: 0] += 1
        }
        let sortedDict = frequencyDict.sorted { $0.value > $1.value }
        var result = [Int]()
        for i in 0 ..< k {
            result.append(sortedDict[i].key)
        }
        return result
    }
}
```


---

# Second solution higher-order functions

## Approach
This approach to solving the problem uses *higher-order functions* to create a *frequency* dictionary and sort its keys by value in descending order.

The function first uses the `reduce` function to create a *frequency* dictionary `dict` from the input array. The `reduce` function takes an initial value of an empty dictionary and a closure that updates the dictionary for each element in the input array. The into parameter allows us to specify the initial value as a dictionary, and the closure increments the value corresponding to the current element in the dictionary.

Next, the function chains together several higher-order functions to sort the keys of the dictionary by value in descending order and return the top `k` keys. The keys are sorted using the `sorted` function with a closure that compares the values of each key-value pair. The resulting array of keys is then sliced using the half-open range operator to take the first `k` elements. Finally, the resulting array is converted to a standard array using the `Array` initializer.


## Complexity
This approach has a *time complexity* of $$O(n \\cdot \\log n)$$ due to the sorting operation, where $$n$$ is the length of the input array.

The *space complexity* of this approach is $$O(n)$$, where $$n$$ is the length of the input array.

## Code

```swift
class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        let dict = nums.reduce(into: [:]) { counts, num in counts[num, default: 0] += 1 }
        return Array(dict.keys.sorted { dict[$0]! > dict[$1]! }[..<k])
    }
}
```


---

# Third solution using Bucket Sort 

## Approach
In the given solution, we first create a *frequency* map `freqMap` by iterating through the array `nums`. We use the `default` parameter of the dictionary's subscript to set the default value of an element to `0` if it doesn't exist in the dictionary. We then increment the *frequency* count of the element in the dictionary.

Next, we create an array of buckets `buckets` of size `nums.count + 1`. We iterate through the `freqMap` to group the elements by their *frequency* in the buckets. Each bucket at index `i` contains all the elements that have a *frequency* of `i`.

Finally, we iterate through the buckets array in reverse order and add the elements to the `result` array until its size becomes equal to `k`. We break out of the loop once we have added `k` elements to the result array.

## Complexity
This approach has a *time complexity* of $$O(n)$$, where $$n$$ is the size of the input array `nums`.

The *space complexity* of this solution is $$O(n)$$, where $$n$$ is the length of the input `nums`.

## Code

```swift
class Solution {
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        var freqMap = [Int: Int]()

        for num in nums {
            freqMap[num, default: 0] += 1
        }
    
        var buckets = Array(repeating: [Int](), count: nums.count + 1)
        for (num, freq) in freqMap {
            buckets[freq].append(num)
        }
        
        var result = [Int]()
        for i in (0 ..< buckets.count).reversed() {
            result += buckets[i]
            if result.count == k {
                break
            }
        }
    
        return result
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)
