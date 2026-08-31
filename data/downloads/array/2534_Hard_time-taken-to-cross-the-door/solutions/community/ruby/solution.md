# O(n) Space and Time complexity Ruby with Two Queues

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5921912/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/5921912/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} arrival
# @param {Integer[]} state
# @return {Integer[]}
def time_taken(arrival, state)
  #using two queues to store the index of the person who wants to enter and exit
  enter_queue = Queue.new
  exit_queue = Queue.new    
  # previous_state is used to keep track of the previous state of the door
  previous_state = 1
  # i is used to iterate through the arrival array and we want to start it at 0 because we want to start at the first person
  i = 0 
  # our n variable is used to store the length of the arrival array which we'll use to create the answer array
  n = arrival.size
  # curr_time is used to keep track of the current time
  curr_time = 0 
  # we want to create an array of size n and set all the values to 0, this will be our answer array
  ans = Array.new(n, 0)

  while i < n || !enter_queue.empty? || !exit_queue.empty? do 
      # add elements to enter/exit queue with same arrival time 
      while(i < n and arrival[i] <= curr_time) do 
          if state[i] == 0
              enter_queue << i
          else
              exit_queue << i
          end 
          i += 1
      end
      if previous_state == 1
          if !exit_queue.empty?
              ans[exit_queue.pop] = curr_time
          elsif !enter_queue.empty?
              ans[enter_queue.pop] = curr_time
              previous_state = 0             
          end   
      else
          if !enter_queue.empty?
              ans[enter_queue.pop] = curr_time                 
          elsif !exit_queue.empty?
              ans[exit_queue.pop] = curr_time
              previous_state = 1 
          else
              previous_state = 1
          end 
      end 
      curr_time += 1
  end 
  ans 

end
```