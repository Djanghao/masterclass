# Elixir Approach and Solution, Using ETS, Compared to Python3

**Author:** bpfaust
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/1979711/](https://leetcode.com/problems/design-underground-system/solutions/1979711/)

---

This is one of those types of problems that is near trivial in other programming languages that allow for mutable data types (particularly at the module level), but is rather difficult in Elixir wherein very little is mutable. So, given we need some level of permance from one function call to another, and mutability of whatever is being saved and manipulated across function calls, we turn to ETS: Erlang Term Storage. 

The approach as described below itself is pretty direct to understand, but we need make a few considerations in how to work with ETS along the way. 
* ETS tables must be `named_table`s so that we can access table without need of passing the `tab()` variable into each function. 
* Because we are working with `named_table`s, these tables will persist in the memory of the code tester unless deleted. Upon initialization, we need to check if the table names have already been used by another test case and, if so, delete the tables. 
* Fortunately, the constraints imposed on the problem allow us to avoid programming a lot of "checking before updating" logic. In actual implementation to avoid errors, this code should have a whole lot more of conditionals. 

Please comment below if you were successful in developing another approach that does not use ETS. 
# Approach
1. Record check in `station_name` and time `t` by `id` into a table named `:check_ins`. 
2. Upon check out, lookup by traveler `id` and define by pattern matching the starting station name, `station_in`, and starting time `time_in`. 
3. Delete the check in record so as to possibly avoid some conflict between records into the future. 
4. Update the table `:travel_times` to increment by `t - time_in` the cumulative total time to travel from `station_in` to `station_name`, and the `count` of travels between the two stations. 
5. If a `:travel_times` record does not currently exist from `station_in` to `station_name`, start with `0` cumulative time and `0` count of travels. 

To get the average travel time between stations, lookup by starting and ending stations (defined as the tuple `{start_station, end_station}`) and define by pattern matching the cumulative `total_time` traveled between the stations and `count` of travels thus far. Return the average travel time as `total_time / count`. 
# Solution, Elixir
Though altogether trivial in theory, the runtime of the below is a whopping 2004 ms with a memory usage of 67.9 MB. 
```
defmodule UndergroundSystem do
  @spec init_() :: any
  def init_() do
    all_tables = :ets.all()
    if Enum.member?(all_tables, :check_ins), do: :ets.delete(:check_ins)
    if Enum.member?(all_tables, :travel_times), do: :ets.delete(:travel_times)

    :ets.new(:check_ins, [:set, :protected, :named_table])
    :ets.new(:travel_times, [:set, :protected, :named_table])

    nil
  end

  @spec check_in(id :: integer, station_name :: String.t, t :: integer) :: any
  def check_in(id, station_name, t) do
    :ets.insert(:check_ins, {id, station_name, t})

    nil
  end

  @spec check_out(id :: integer, station_name :: String.t, t :: integer) :: any
  def check_out(id, station_name, t) do
    [{_, station_in, time_in}] = :ets.lookup(:check_ins, id)
    :ets.delete(:check_ins, id)

    :ets.update_counter(:travel_times, 
                        {station_in, station_name}, 
                        [{2, t - time_in}, {3, 1}], 
                        {{station_in, station_name}, 0, 0})

    nil
  end

  @spec get_average_time(start_station :: String.t, end_station :: String.t) :: float
  def get_average_time(start_station, end_station) do
    [{_, total_time, count}] = :ets.lookup(:travel_times, {start_station, end_station})

    total_time / count
  end
end

# Your functions will be called as such:
# UndergroundSystem.init_()
# UndergroundSystem.check_in(id, station_name, t)
# UndergroundSystem.check_out(id, station_name, t)
# param_3 = UndergroundSystem.get_average_time(start_station, end_station)

# UndergroundSystem.init_ will be called before every test case, in which you can do some necessary initializations.
```

# Solution, Python3
By comparison, here would be a similar approach developed for Python3. This approach has a runtime of 259 ms, faster than 77.44%, and memory usage of 23.9 MB, less than 84.97%. A stark difference versus Elixir and the need for ETS. 
```
class UndergroundSystem:
  checkIns = {}
  travelTimes = {}
  
  def __init__(self):
    self.checkIns = {}
    self.travelTimes = {}

  def checkIn(self, id: int, stationName: str, t: int) -> None:
    self.checkIns[id] = (stationName, t)

  def checkOut(self, id: int, stationName: str, t: int) -> None:
    (stationIn, timeIn) = self.checkIns.pop(id)
    totalTime, travelCount = 0, 0
    if (stationIn, stationName) in self.travelTimes:
      (totalTime, travelCount) = self.travelTimes[(stationIn, stationName)]
    self.travelTimes[(stationIn, stationName)] = (totalTime + t - timeIn, travelCount + 1) 

  def getAverageTime(self, startStation: str, endStation: str) -> float:
    (totalTime, travelCount) = self.travelTimes[(startStation, endStation)]
    return totalTime / travelCount


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)
```