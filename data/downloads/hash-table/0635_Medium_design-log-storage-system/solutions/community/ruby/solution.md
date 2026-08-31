# Ruby Solution, Timestamp-Integer, Put - O(1), Read - O(n)

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/1499139/](https://leetcode.com/problems/design-log-storage-system/solutions/1499139/)

---

```
class LogSystem
    def initialize()
    
		// Saving Logs Data in hash
        @logs_data = {}
    
		// Mapping granularity with Array index
        @granularity = {
            'Year' => 0,
            'Month' => 1,
            'Day' => 2,
            'Hour' => 3,
            'Minute' => 4,
            'Second' => 5,
        }
		
        // Array for mapping Granularity with Min and Max values
        @granularity_min_max = [["2000","2017"], ["01","12"], ["01","31"], ["00","23"], ["00","59"], ["00","59"]]
    end
    
    
    def find_keys(time1, time2, g)
        time1 = time1.split(':')
        time2 = time2.split(':')
        
		
		//	Setting the time1 -> min possible value 
		//	Setting the time2 -> max possible value
		//	On basis of granularity
		
        for i in (@granularity[g]+1)..5
            time1[i] = @granularity_min_max[i][0]
            time2[i] = @granularity_min_max[i][1]
        end
		
		// Converting Time into integer
        [time1.join('').to_i, time2.join('').to_i]
    end
    
    def put_key(t)
        t.gsub(":", "").to_i
    end


    def put(id, timestamp)
        @logs_data[put_key(timestamp)] = id
    end


    def retrieve(start, last, granularity)
        res = []
		
		// Getting start Time and End time considering granularity
        time1, time2 = find_keys(start, last, granularity)

		// Getting all keys with desired data
        keys = @logs_data.keys.filter {|k| k >= time1 && k <= time2 }
        
		// Pushing data in res array
        for i in keys
            res << @logs_data[i]
        end
		
        res
    end

end
```