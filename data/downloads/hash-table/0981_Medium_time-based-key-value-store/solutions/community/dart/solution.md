# Binary search solution

**Author:** Nomoke
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/3974135/](https://leetcode.com/problems/time-based-key-value-store/solutions/3974135/)

---

# Code
```
class TimeMap {
  final storage = <String, List<TimeValue>>{};

  void set(String key, String value, int timestamp) {
    storage[key]?.add(TimeValue(value, timestamp));
    storage[key] ??= [TimeValue(value, timestamp)];
  }
  
  String get(String key, int timestamp) {
    if(storage.containsKey(key)) {
      final value = _search(storage[key]!, timestamp);
      if(value != null) return value.value;
    }

    return '';
  }

  TimeValue? _search(List<TimeValue> values, int timestamp) {
    final len = values.length;

    for(int l = 0, r = len - 1; l <= r;) {
      final mid = (l + r) ~/ 2;
      final time = values[mid].timestamp;

      if (time > timestamp) {
        r = mid - 1;
      } else if (time == timestamp || mid + 1 >= len) {
        return values[mid]; 
      } else {
        if (values[mid+1].timestamp > timestamp) {
          return values[mid];
        }
        l = mid + 1;
      }
        
    }

    return null;
  }
}

class TimeValue {
  const TimeValue(
    this.value,
    this.timestamp,
  );

  final String value;
  final int timestamp;
}
```