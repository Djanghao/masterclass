# Python: A comparison of lots of approaches! [Sorting, two pointers, deque, iterator, generator]

**Author:** Hai_dee
**Votes:** 609
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/310865/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/310865/)

---

This question is a cool one in that there is lots of different approaches, each with its own pros and cons. And then there's also different ways of implementing them, depending on whether you are after raw performance or beautiful code.

Something slightly irritating is that leetcode isn't testing with big enough test cases to push the time complexity of the O(n-log-n) approaches below the O(n) ones. It goes to show, sometimes what "wins" at the notoriously inaccurate Leetcode time/ space percentiles isn't always the best in practice, or even in an interview.

# Approach #1: Using built in sort.
There are a few similar approaches we can take here, each with its own subtle differences. All are of an ```O(n-log-n)``` time complexity due to using the inbuilt sort, although they differ in their space complexity.

## a) Overwriting input:

```
    def sortedSquares(self, A: List[int]) -> List[int]:
        for i in range(len(A)):
            A[i] *= A[i]
        A.sort()
        return A
```

This approach uses ```O(1)``` memory beyond the input array, and is truely **in-place**. *However*, it is not always a good idea to overwrite inputs. Remember that because we passed it by reference, the original is actually lost. Often functions like this are a part of an API, and in a lot of cases, nobody wants an API that clobbers their input.

I think it's best to ask your interviewer if they want something done **in-place** or not. It is a common misconception that we should *always* be trying to do things in-place, overwriting the inputs.

## b) Making a new array, not in place, O(n) auxillary space.

```
def sortedSquares(self, A: List[int]) -> List[int]:
        return sorted([v**2 for v in A])
```

Ahhhh, our good 'ol clever Python one-liner. There is a suble space inefficiency in it though. For a brief moment, we're using 3n memory, not 2n. The one line has 2 not-in-place operations in it; the list comprehension creates a new list, and so does sorted. The list comprehension list is promptly garbage collected upon function return, *but* because it was briefly there, the max memory usage was ultimately 3n. With lots of memory, this is totally fine, and the pythonic nature of it makes it a great solution. But we do need to be aware of it.

## c) Making a new array, not in place, O(1) auxillary space.

Making a new array, in place.

```
def sortedSquares(self, A: List[int]) -> List[int]:
        return_array = [v**2 for v in A]
		return_array.sort() # This is in place!
		return return_array
```

So, is this ```O(1)``` space or ```O(n)``` space? Arguments can be made either way, sometimes people say to count the output data stucture in the calculation, and sometimes they don't. If we're talking about *auxillary* space, we generally don't count the output data structure, which would make it ```O(1)```. I think this is a more accurate way of putting it -- we are trying to measure what the algorithm itself is using, not just what the inevitable size of the output is. But it's important to be clear in interviews what you are and aren't counting.

## Overall thoughts on these approaches
You won't be coding any of these approaches in an interview (in my own very, very limited experience though!). By all means your interviewer will want to hear that you could do it this way, but there is 3 big problems if they are the only approaches you can come up with.
1) We shouldn't need to use an O(n-log-n) sort operation on data that for the most part is already sorted. There's something not right with that. If this is the approach the interviewer wanted, they wouldn't have given you the numbers in a sorted list in the first place.
2) Following on from that, there are O(n) solutions.
3) Why would they be asking you to code something so trivial? Let's be honest. They want to see you writing some meaty code. 

The remaining approaches exploit the existing sorting. If we were to go down the list squaring each number, we'd have a "v" sorted list, in that the squares of the negatives decrease, and then the squares of the positives increase, i.e.
```[-4, -2, -1, 0, 1, 2, 3, 5] -> [16, 4, 1, 0, 1, 4, 9, 25]```

We can get this into a sorted list in ```O(n)``` time.
# Approach 2: Raw pointers
In terms of performance, you can't beat this (well, if leetcode actually tested on massive test cases...). It's O(n) time, and O(1) auxillary space.

```
class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return_array = [0] * len(A)
        write_pointer = len(A) - 1
        left_read_pointer = 0
        right_read_pointer = len(A) - 1
        left_square = A[left_read_pointer] ** 2
        right_square = A[right_read_pointer] ** 2
        while write_pointer >= 0:
            if left_square > right_square:
                return_array[write_pointer] = left_square
                left_read_pointer += 1
                left_square = A[left_read_pointer] ** 2
            else:
                return_array[write_pointer] = right_square
                right_read_pointer -= 1
                right_square = A[right_read_pointer] ** 2
            write_pointer -= 1
        return return_array
```

# Approach 3: Using a deque 
This approach is the first of the trading-off-some-raw-performance-for-beauty=and-elegance approaches. It remains as ```O(n)``` *time complexity* like approach 2, but the heavy-weight nature of it will slow it down by a constant amount. If this doesn't matter though (and in a lot of cases it doesn't), then the elegance will reduce the risk of bugs and lead to more readable and maintable code. It is also important to note that it does use ```O(n)``` *auxillary space*.

```
    def sortedSquares(self, A: List[int]) -> List[int]:
        number_deque = collections.deque(A)
        reverse_sorted_squares = []
        while number_deque:
            left_square = number_deque[0] ** 2
            right_square = number_deque[-1] ** 2
            if left_square > right_square:
                reverse_sorted_squares.append(left_square)
                number_deque.popleft()
            else:
                reverse_sorted_squares.append(right_square)
                number_deque.pop()
        return reverse_sorted_squares[::-1]
```

# Approach 4: The iterator pattern
This is one of my favourites. While it suffers from the same constant time slowdown as the previous approach, its auxillary space usage remains at ```O(1)```. The iterator pattern is a great way of splitting up code into more testable units. It seperates the problem of getting the squares in a sorted order from the problem of writing them into an array.

There are 2 subapproaches. One that returns the squares in reversed order, and one that puts them around the right way. The latter is more complex to code, but it means that the code dealing with the writing doesn't have to reverse them, and it is still a time complexity of ```O(n)``` and an auxillary space usage of ```O(1)```.

## a) Iterator returning from largest -> smallest

```
class SquaresIterator(object):
    def __init__(self, sorted_array):
        self.sorted_array = sorted_array
        self.left_pointer = 0
        self.right_pointer = len(sorted_array) - 1
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.left_pointer > self.right_pointer:
            raise StopIteration
        left_square = self.sorted_array[self.left_pointer] ** 2
        right_square = self.sorted_array[self.right_pointer] ** 2
        if left_square > right_square:
            self.left_pointer += 1
            return left_square
        else:
            self.right_pointer -= 1
            return right_square
     

class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return_array = [0] * len(A)
        write_pointer = len(A) - 1
        for square in SquaresIterator(A):
            return_array[write_pointer] = square
            write_pointer -= 1
        return return_array
```

## b) Iterator returning from smallest -> largest

This one uses a binary search to set the left and right pointers in the middle of the array to begin with. This way, the items are returned in the correct order. We don't even need explicit write code here!

```
class SquaresIterator(object):
    
    def __init__(self, sorted_array):
        self.sorted_array = sorted_array
        self.left_pointer, self.right_pointer = self._get_pointers()
    
    def __iter__(self):
        return self
    
    def __next__(self):
        
        # If there's no values remaining.
        if self.left_pointer < 0 and self.right_pointer >= len(self.sorted_array):
            raise StopIteration
        
        # If there's no values remaining on the left end.
        if self.left_pointer < 0:
            self.right_pointer += 1
            return self.sorted_array[self.right_pointer - 1] ** 2
        
        # If there's no values remaining on the right end.
        if self.right_pointer >= len(self.sorted_array):
            self.left_pointer -= 1
            return self.sorted_array[self.left_pointer + 1] ** 2
        
        # If there's values remaining on both ends.
        left_square = self.sorted_array[self.left_pointer] ** 2
        right_square = self.sorted_array[self.right_pointer] ** 2
        if left_square < right_square:
            self.left_pointer -= 1
            return left_square
        else:
            self.right_pointer += 1
            return right_square
    
    
    def _get_pointers(self):
        low = 0
        high = len(self.sorted_array)
        while high - low > 1:
            mid = low + (high - low) // 2
            if self.sorted_array[mid] > 0:
                high = mid
            else:
                low = mid
        return low, high
        
    
class Solution:
    def sortedSquares(self, A: List[int]) -> List[int]:
        return list(SquaresIterator(A))
```

# Approach 5: Generators
Why are we using iterators for such a simple task? We can use a generator function instead!

Again, it's O(n) time with O(1) auxillary space.

```
class Solution:
    
    def generate_sorted_squares(self, nums):
        
        # Start by doing our binary search to find where
        # to place the pointers.
        left = 0
        right = len(nums)
        while right - left > 1:
            mid = left + (right - left) // 2
            if nums[mid] > 0:
                right = mid
            else:
                left = mid
        
        # And now the main generator loop. The condition is the negation
        # of the StopIteration condition for the iterator approach.
        while left >= 0 or right < len(nums):
            if left < 0:
                right += 1
                yield nums[right - 1] ** 2
            elif right >= len(nums):
                left -= 1
                yield nums[left + 1] ** 2
            else:
                left_square = nums[left] ** 2
                right_square = nums[right] ** 2
                if left_square < right_square:
                    left -= 1
                    yield left_square
                else:
                    right += 1
                    yield right_square
        
    
    def sortedSquares(self, A: List[int]) -> List[int]:
        return list(self.generate_sorted_squares(A))
```

# In conclusion
I'm sure there are many more approaches. Another would be to combine the 2 pointer technique with the binary search. 

I'm interested in thoughts people have on which is best in an interview!