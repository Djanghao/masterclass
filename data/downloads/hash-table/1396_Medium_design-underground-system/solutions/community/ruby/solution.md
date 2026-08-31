# Ruby Solution. Easy understand w/ comments

**Author:** guswhitten
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/3575799/](https://leetcode.com/problems/design-underground-system/solutions/3575799/)

---

```
class UndergroundSystem
    def initialize()
        @pass_checkin = {}
        @travel_times = {}
    end

    def check_in(id, station_name, t)
        # pass_checkin tracks starting time and station when passengers checkin
        @pass_checkin[id] = [t, station_name]
    end

    def check_out(id, station_name, t)
        # get passenger's travel time and stations of travel
        travel_time = t - @pass_checkin[id].first
        station_transfer = "#{@pass_checkin[id].last} -> #{station_name}"
        
        # append newly recorded travel time for this unique station pair, or create new array
        if @travel_times.has_key?(station_transfer)
            @travel_times[station_transfer] << travel_time
        else
            @travel_times[station_transfer] = [travel_time]
        end
    end

    def get_average_time(start_station, end_station)
        # get array of recorded travel times for these stations, and return average
        arr = @travel_times["#{start_station} -> #{end_station}"]
        return arr.sum.fdiv(arr.size)
    end
end
```
