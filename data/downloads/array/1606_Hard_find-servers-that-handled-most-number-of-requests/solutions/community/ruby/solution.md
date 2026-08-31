# Ruby O(N * log M) solution using only Arrays

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/897267/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/897267/)

---

## Brute force solution that gives TLE. 
*Complexity:* `O(N * K)`, where `N` - the number of tasks.

```
def busiest_servers(k, arrival, load)
  job_end_times = [0] * k # busy till time per sever
  cnt = [0] * k # handled tasks count per server
  max_cnt = 0
  arrival.zip(load).each_with_index do |(time, duration), i|
    cond = proc { |j| job_end_times[j] <= time }
    j = (i % k...k).find(&cond) || (0...i % k).find(&cond) # O(K)
    next unless j

    job_end_times[j] = time + duration

    # count taken tasks
    cnt[j] += 1
    max_cnt = cnt[j] if cnt[j] > max_cnt
  end
  (0...k).select { |i| cnt[i] == max_cnt }
end
```

## Optimization

To speed up the next available server lookup, we'll search only within available servers using binray search.
Add available servers sorted `Array`  with servers numbers and list of in-progress tasks (`jobs`) sorted by tasks end time.

*Complexity:* `O(N * log M)`, where `N` - the number of tasks, `M` - max(`N`, `K`)

```
Job = Struct.new(:server_no, :end_time)

def busiest_servers(k, arrival, load)
  servers = *0...k # available servers
  jobs = [] # in-progress tasks
  cnt = [0] * k # handled tasks count per server
  max_cnt = 0
  arrival.zip(load).each_with_index do |(time, duration), i|
    # Unregister comleted jobs, add to available servers.
	# The body of the loop is executed O(N) times in the WHOLE program.
    while jobs.any? && jobs[0].end_time <= time
      job = jobs.delete_at(0)
      insert_at = servers.bsearch_index { |n| n >= job.server_no } || servers.size
      servers.insert(insert_at, job.server_no)
    end
    next if servers.empty?

    # get the next available server starting from (i % k)th server -- O(K)
    ik = i % k
    j = servers.bsearch_index { |n| n >= ik } || 0

    # register server as busy till task's end time -- O(N)
    server_no = servers.delete_at(j)
    end_time = time + duration
    insert_at = jobs.bsearch_index { |j| j.end_time >= end_time } || jobs.size
    jobs.insert(insert_at, Job[server_no, end_time])

    # count taken tasks
    cnt[server_no] += 1
    max_cnt = cnt[server_no] if cnt[server_no] > max_cnt
  end
  # return servers that handled most tasks
  (0...k).select { |i| cnt[i] == max_cnt }
end
```

## Some refactoring
Introduce `SortedArray` class with method `#add` and make jobs comparable by end time. 

```
class Job < Struct.new(:server_no, :end_time)
  include Comparable

  def <=>(other)
    end_time <=> other.end_time
  end
end

class SortedArray < Array
  def add(val)
    insert_at = bsearch_index { |n| n >= val } || size
    insert(insert_at, val)
  end
end

def busiest_servers(k, arrival, load)
  servers = SortedArray.new(k) { |i| i } # available servers
  jobs = SortedArray.new # in-progress tasks
  cnt = [0] * k # handled tasks count per server
  max_cnt = 0
  arrival.zip(load).each_with_index do |(time, duration), i|
    # Unregister comleted jobs, add to available servers.
	# The body of the loop is executed O(N) times in the WHOLE program.
    while jobs.any? && jobs[0].end_time <= time
      servers.add(jobs.shift.server_no)
    end
    next if servers.empty?

    # get the next available server starting from (i % k)th server -- O(K)
    ik = i % k
    server_no = servers.delete_at(servers.bsearch_index { |n| n >= ik } || 0)

    # register server as busy till task's end time -- O(N)
    jobs.add(Job[server_no, time + duration])

    # count assigned tasks
    cnt[server_no] += 1
    max_cnt = cnt[server_no] if cnt[server_no] > max_cnt
  end
  # return servers that handled most tasks
  (0...k).select { |i| cnt[i] == max_cnt }
end
```