# [C++] 4 different approaches [Detailed Explanation]

**Author:** cryptx_
**Votes:** 7
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/2191535/](https://leetcode.com/problems/logger-rate-limiter/solutions/2191535/)

---

```
/*
    https://leetcode.com/problems/logger-rate-limiter/
    
    Solution 1: Hash Table
    We use hash table to store the last printed message time for each of the unique messages. 
    TC: O(1)
    Cons: Memory exhaustion
    Pros: Simple to implement
    
    Solution 2: Two sets
    Idea is to keep two sets. Each set keeps track of one interval of 10s that is wrt to a start time.
    Set 1 keeps all the messages 10 seconds before start_time and set 2 keeps all the messages from start_time till 10s from there.
    For a given log, if the timestamp is in the curent interval, then check against that set.
    Else, the current set interval duration has elapsed and hence move the elements from that set
    to set1 because some elements might still have not completed 10s and hence we keep them safe in set1 for
    another 10s.
    
    Solution 3: Queue + Set
    Use a queue that records the log events. Idea is to have a queue that only stores the events from last 10s. We also use
    a set that keeps track of logs recently printed. For every new log message, remove the events from queue that are older than 10s.
    While removing ensure to remove the entries from set as well. Check if the message is still present or not in the set after removing.
    If it does, that means that log entry hasn't elapsed the 10s mark and still in queue. Add the event log if it is getting printed.
    
    Solution 4: Bucketing + Set
    Idea is to keep buckets for each of the 10s. We maintain an array that tracks the timestamp for a bucket. If use % operation to
    decide the bucket. If the timestamp of a bucket is not equal to current timestamp, that means it's been 10s since the last log message
    for that bucket, so clear all the messages from that bucket.
    Then check all the buckets for that same log message and one which is under 10s mark, if we find one then that means we don't print the
    current log message and hence ignore the message.
    If we don;t find any buckets with the message, add the message to the right bucket.
*/    

//////////////////////////// Solution 1: Hash Table
// Con: Memory can be overwhelmed with many unique logs as previous ones are
// not deleted

class Logger {
private:
    unordered_map<string, int> last_printed;
public:
    Logger() {
    }
    
    bool shouldPrintMessage(int timestamp, string message) {
        // if the message is coming for the 1st time, print
        if(!last_printed.count(message)) {
            last_printed[message] = timestamp;
            return true;
        }
        else {
            int elapsed = timestamp - last_printed[message];
            if(elapsed >= 10)
                last_printed[message] = timestamp;
            return elapsed >= 10;
        }
    }
};


////////////////////////// Solution 2: Two Sets
// Pros: Efficient use of memory.
class Logger {
private:
    // Indicates the start time of current interval of message requests
    int interval_start;
    int time_duration = 10;
    // Tracks messages in current interval of time_duration and
    // messages in previous time_duration interval
    // -10 prev_interval | interval_start | curr_interval +10
    
    // <message, timestamp>
    unordered_map<string, int> curr_interval, prev_interval;
public:
    Logger(): interval_start(0) {}
    
    bool shouldPrintMessage(int timestamp, string message) {
        // check if the current log can be put in the current interval 
        if(timestamp >= interval_start + time_duration) {
            // Since current timestamp > interval of curr message requests,
            // move the requests received in last 10s to prev_interval and
            // clear the current interval so that it can receive new messages 
            // We move the messages to prev interval because there might be messages that
            // have not completed 10s eg timestamp = 19 (start_interval=10), so we move them
            // to prev_interval where it will wait for another 10s before that is also cleared
            prev_interval = curr_interval;
            curr_interval.clear();
            interval_start = timestamp;
        }
        
        // Check if the same log message came or not in the current interval
        if(curr_interval.count(message))
            return false;
        // check if same log exists in the previous 10s interval, check if that message
        // has recency > last 10s
        if(prev_interval.count(message) && prev_interval[message] + 10 > timestamp)
            return false;
        
        // add the current message to the current interval
        curr_interval.emplace(message, timestamp);
        return true;
    }
};


////////////////////////// Solution 3: Queue + Set
// Con: Memory can be overwhelmed for queue if too many req made in the same 10s interval
// Pros: Hash data retained only for 10s

class Logger {
private:
    unordered_map<string, int> last_printed;
    queue<pair<string, int> > logs;
public:
    Logger() {
    }
    
    bool shouldPrintMessage(int timestamp, string message) {
        // clear all logs older than 10s wrt current
        while(!logs.empty() && logs.front().second + 10 <= timestamp) {
            auto [log, t] = logs.front();
            logs.pop();
            // clear the record from set, since this is the last instance
            // when this message was printed
            last_printed.erase(log);
        }
                                                            
        // Check if the log came within the last 10s
        if(last_printed.count(message))
            return false;
        
        // add the log event
        logs.emplace(message, timestamp);
        last_printed.emplace(message, timestamp);
        return true;
    }
};


// Solution 4: Bucketing + Set
// Con: A bit more overhead
// Pros: Low memory usage
class Logger {
private:
    int time_duration = 0;
    vector<int> bucket_timestamps;
    vector<unordered_set<string>> time_buckets;
public:
    Logger() {
        time_duration = 10;
        time_buckets.resize(time_duration);
        bucket_timestamps.resize(time_duration, -1);
    }
    
    bool shouldPrintMessage(int timestamp, string message) {
        // bucket where the message belongs
        int bucket_idx = timestamp % time_duration;
        // check the bucket's timestamp
        // if the timstamp of bucket doesn't match that means
        // this message is coming after a duration of time_duration
        // so all the logs are expired
        if(bucket_timestamps[bucket_idx] != timestamp) {
            bucket_timestamps[bucket_idx] = timestamp;
            // clear all the expired logs from bucket
            time_buckets[bucket_idx].clear();
        }
        
        // check if the log message came in last time_duration seconds
        for(int idx = 0; idx < time_buckets.size(); idx++) {
            if(bucket_timestamps[idx] + 10 > timestamp && time_buckets[idx].count(message))
                return false;
        }
        // add the message
        time_buckets[bucket_idx].emplace(message);
        return true;
    }
};


/**
 * Your Logger object will be instantiated and called as such:
 * Logger* obj = new Logger();
 * bool param_1 = obj->shouldPrintMessage(timestamp,message);
 */
```