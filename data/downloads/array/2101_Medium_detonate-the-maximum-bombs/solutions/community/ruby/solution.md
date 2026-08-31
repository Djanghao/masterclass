# Ruby solution with BFS (100%/100%)

**Author:** dtkalla
**Votes:** 2
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3587544/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3587544/)

---

# Intuition
For each bomb, find the bombs it immediately causes to explode, then BFS to find how many it explodes in total.

# Approach
1. Create a hash of bombs that each bomb will directly explode (each key is an index, each value is an array of indices of other bombs).
2. Iterate through every pair of bombs.  For each pair:
    - Use the distance formula to check if the first bomb explodes the other.  If so, add it to the hash.
    - Check if the second bomb explodes the first bomb, and add it to the *second* bomb's array if so.
3. Initialize the maximum to be zero (in case there are no bombs).
4. BFS from each bomb to see all other bombs it explodes:
    - Create a set of bombs that have exploded.
    - Create a queue with the first bomb.
    - For each bomb in the queue, check if it explodes any bombs that haven't exploded yet.  If so, add those bombs to the checked set and the queue.
    - Once queue is empty, compare the size of the checked (exploded) bombs to max, and take whichever is bigger.
5. Return max.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
def maximum_detonation(bombs)
    chain = Hash.new { |h,k| h[k] = [] }

    bombs.each_with_index do |bomb,i|
        bombs.each_with_index do |bomb2,j|
            if i > j
                a,b,c = bomb
                d,e,f = bomb2

                chain[i] << j if (a-d)**2 + (b-e)**2 <= c**2
                chain[j] << i if (a-d)**2 + (b-e)**2 <= f**2
            end
        end
    end

    max = 0

    (0...bombs.length).each do |i|
        checked = Set[i]
        queue = checked.to_a

        until queue.empty?
            bomb = queue.shift
            connections = chain[bomb]
            connections.each do |connection|
                queue << connection unless checked.include?(connection)
                checked.add(connection)
            end
        end

        max = checked.size if checked.size > max
    end

    max
end
```