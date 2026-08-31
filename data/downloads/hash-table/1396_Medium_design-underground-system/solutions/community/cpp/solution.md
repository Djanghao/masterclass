# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 33
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/3580382/](https://leetcode.com/problems/design-underground-system/solutions/3580382/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. This is only for first 10,000 Subscribers.  **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe

# Video Solution

# Search \uD83D\uDC49 `Design Underground System By Tech Wired` 

# or

# Click the Link in my Profile


# Approach:

To design the "Underground System," we can use two data structures: one to store the check-in information and another to store the travel times. Here is the overall approach:

- For check-in:
When a customer checks in, store their ID along with the station name and check-in time in a dictionary or map. This will allow us to retrieve the check-in information later when the customer checks out.
- For check-out:
When a customer checks out, retrieve their check-in information from the dictionary using their ID.
Calculate the travel time by subtracting the check-in time from the current check-out time.
- Update the travel times dictionary:
If the (start_station, end_station) pair already exists in the dictionary, update the total time and increment the count.
Otherwise, create a new entry in the dictionary with the initial travel time and count.
- For calculating average travel time:
Retrieve the total time and count from the travel times dictionary for the given (startStation, endStation) pair.
Calculate and return the average travel time by dividing the total time by the count.
# Intuition:

The approach leverages the concept of storing relevant information at check-in and using it to calculate the travel times at check-out. By storing the check-in information in a dictionary or map, we can easily retrieve it when needed. Similarly, the travel times are stored in another dictionary, where the (start_station, end_station) pair serves as the key, and the total time and count are stored as values.

The use of these data structures allows for efficient retrieval and update operations. The solution optimizes both time and space complexity by removing unnecessary check-in information once the customer has checked out and by utilizing appropriate data structures to track travel times efficiently.

```Python []
class UndergroundSystem:
    def __init__(self):
        # Dictionary to store total travel time and count for each (start_station, end_station) pair
        self.travel_times = {}

        # Dictionary to store check-in information with customer_id as key and (start_station, check_in_time) as value
        self.check_ins = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.check_ins[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        start_station, check_in_time = self.check_ins.pop(id)
        travel = (start_station, stationName)
        travel_time = t - check_in_time

        if travel in self.travel_times:
            total_time, count = self.travel_times[travel]
            self.travel_times[travel] = (total_time + travel_time, count + 1)
        else:
            self.travel_times[travel] = (travel_time, 1)

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        travel = (startStation, endStation)
        total_time, count = self.travel_times[travel]
        return total_time / count

```
```Java []

class UndergroundSystem {
    private Map<Integer, CheckInInfo> checkIns;
    private Map<String, TravelInfo> travelTimes;

    public UndergroundSystem() {
        checkIns = new HashMap<>();
        travelTimes = new HashMap<>();
    }

    public void checkIn(int id, String stationName, int t) {
        checkIns.put(id, new CheckInInfo(stationName, t));
    }

    public void checkOut(int id, String stationName, int t) {
        CheckInInfo checkInInfo = checkIns.remove(id);
        String travel = checkInInfo.stationName + "," + stationName;
        int travelTime = t - checkInInfo.checkInTime;

        if (travelTimes.containsKey(travel)) {
            TravelInfo travelInfo = travelTimes.get(travel);
            travelInfo.totalTime += travelTime;
            travelInfo.count++;
        } else {
            travelTimes.put(travel, new TravelInfo(travelTime, 1));
        }
    }

    public double getAverageTime(String startStation, String endStation) {
        String travel = startStation + "," + endStation;
        TravelInfo travelInfo = travelTimes.get(travel);
        return (double) travelInfo.totalTime / travelInfo.count;
    }

    private class CheckInInfo {
        String stationName;
        int checkInTime;

        public CheckInInfo(String stationName, int checkInTime) {
            this.stationName = stationName;
            this.checkInTime = checkInTime;
        }
    }

    private class TravelInfo {
        int totalTime;
        int count;

        public TravelInfo(int totalTime, int count) {
            this.totalTime = totalTime;
            this.count = count;
        }
    }
}

```
```C++ []


class UndergroundSystem {
public:
    UndergroundSystem() {}

    void checkIn(int id, string stationName, int t) {
        checkIns[id] = make_pair(stationName, t);
    }

    void checkOut(int id, string stationName, int t) {
        auto checkInInfo = checkIns[id];
        checkIns.erase(id);
        string travel = checkInInfo.first + "," + stationName;
        int travelTime = t - checkInInfo.second;

        if (travelTimes.find(travel) != travelTimes.end()) {
            travelTimes[travel].first += travelTime;
            travelTimes[travel].second++;
        } else {
            travelTimes[travel] = make_pair(travelTime, 1);
        }
    }

    double getAverageTime(string startStation, string endStation) {
        string travel = startStation + "," + endStation;
        auto travelInfo = travelTimes[travel];
        return (double) travelInfo.first / travelInfo.second;
    }

private:
    unordered_map<int, pair<string, int>> checkIns;
    unordered_map<string, pair<int, int>> travelTimes;
};

```
# An Upvote will be encouraging \uD83D\uDC4D
