# Faux Heap(since Ruby Heap is too slow)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899920/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899920/)

---


# Code
```ruby []
# @param {Integer[][]} times
# @param {Integer} target_friend
# @return {Integer}
def smallest_chair(times, target_friend)
    i = 0
    while i < times.size
        times[i] << i
        i += 1
    end

    target_arrival_time = times[target_friend][0]

    times.sort!{|a, b| a[0] <=> b[0]}

    expires = Hash.new{|h, key| h[key] = []}

    heap = (0..target_arrival_time).to_a
    expired_heap = times.collect{|a| a[1]}.sort
    t = 1
    i = 0
    while i < times.size
        friend = times[i]
        arrival = friend[0]
        while expired_heap[0] <= arrival
            new_t = expired_heap.shift
            expires[new_t].each do |chair|
                sorted_insert heap, chair
            end
            
            expires[new_t] = []
        end

        t = arrival

        expires[t] = []

        val = heap.shift
        if t == target_arrival_time
            return val
        end

        if friend[1] <= target_arrival_time
            expires[friend[1]] << val
        end

        i += 1
    end

end

def sorted_insert arr, val
    i = arr.bsearch_index{|x| x > val} || arr.size
    arr.insert(i, val)
end
```