# Prefix Product Array

**Author:** hailfellow
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5298635/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5298635/)

---

# Intuition
The contstraints suggested that the test cases were going to try and timeout so the solution had to be fast, and similar problems to this had made use of a prefix array.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Figuring this needed to be solved with a prefix array, you are multiplying each number as it comes in and adding that product to the array. The product of the last `k` numbers is equal to the total product divided by the prefix product `k` numbers back.

So for this set of numbers `[2,4,5]`
It produces this prefix product `[2,8,40]`
And when `K = 2`, we want `4 * 5`, so to isolate ` 4 * 5` we need to remove everything before it, which can be done dividing by `2`.
So you are returning `arr[-1] / arr[-1 - k]`. 

We can use a baseline prefix array of `[1]` so the first number has something to multiply against, and when `k == arr.length` you want to return the total product; this will stay in bounds and dividing by `1` is very clean. 

As numbers come in multiply the new number by the previous product and add to the prefix array.

If you run into a `0`, every `k` that crosses over the `0` must return `0`, so you don't really need to keep those around, but you do need to make sure that you handle any given `k` which is expecting there to be zeros. The problem description states that `k` will always be in bounds, so with a reset array the only time that `k` would go out of bounds is if you have run across a `0`.

So `getProduct` combines all of that, return `0` if `k` goes out of bounds, otherwise return the top number divided by the prefix product `k` numbers behind.

# Complexity
- Time complexity: $$O(1)$$ - array push, multiply, divide, compare all constant time
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ - I suppose the longest consecutive run of non-zero numbers, which worst case is the whole set
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ProductOfNumbers
    def initialize()
        @prefix_products = [1]
    end


=begin
    :type num: Integer
    :rtype: Void
=end
    def add(num)
        if num == 0
            @prefix_products = [1]
        else
            @prefix_products.push(num * @prefix_products[-1])
        end
    end


=begin
    :type k: Integer
    :rtype: Integer
=end
    def get_product(k)
        return 0 if k >= @prefix_products.length
        @prefix_products[@prefix_products.length - 1] / @prefix_products[@prefix_products.length - k - 1]
    end


end

# Your ProductOfNumbers object will be instantiated and called as such:
# obj = ProductOfNumbers.new()
# obj.add(num)
# param_2 = obj.get_product(k)
```