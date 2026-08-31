# 100% Beast With Dart

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/5481306/](https://leetcode.com/problems/design-underground-system/solutions/5481306/)

---



# Code
```

class CheckInData {
  String stationName;
  int time;

  CheckInData(this.stationName, this.time);
}


class UndergroundSystem {

  Map<int,CheckInData> checkIns = {};

  Map<String,Map<String, List<double>>> travelTimes  = {};

  UndergroundSystem() {
    
  }
  
  void checkIn(int id, String stationName, int t) {
    checkIns[id] = CheckInData(stationName, t);
  }
  
  void checkOut(int id, String stationName, int t) {
    CheckInData checkInData = checkIns.remove(id)!;
    String startStation = checkInData.stationName;
    int startTime = checkInData.time;
    double travelTime = t.toDouble() - startTime.toDouble();
   if (!travelTimes.containsKey(startStation)) {
      travelTimes[startStation] = {};
    }
    if (!travelTimes[startStation]!.containsKey(stationName)) {
      travelTimes[startStation]![stationName] = [];
    }
    travelTimes[startStation]![stationName]!.add(travelTime);
  }
  
  double getAverageTime(String startStation, String endStation) {
   List<double> times = travelTimes[startStation]![endStation]!;
    double sum = times.reduce((a, b) => a + b);
    return sum / times.length;  }
}




```