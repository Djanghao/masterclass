# ⚡⚡⚡Solution with dart ⚡⚡⚡100% Beats

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/5505956/](https://leetcode.com/problems/frequency-tracker/solutions/5505956/)

---



# Code
```
class FrequencyTracker {
  // Bi\u1EBFn \u0111\u1EC3 l\u01B0u tr\u1EEF s\u1ED1 l\u1EA7n xu\u1EA5t hi\u1EC7n c\u1EE7a c\xE1c s\u1ED1
  Map<int, int> numberFrequency = {};
  // Bi\u1EBFn \u0111\u1EC3 l\u01B0u tr\u1EEF t\u1EA7n su\u1EA5t c\u1EE7a c\xE1c t\u1EA7n s\u1ED1
  Map<int, int> frequencyCount = {};

  // Kh\u1EDFi t\u1EA1o FrequencyTracker v\u1EDBi m\u1ED9t m\u1EA3ng r\u1ED7ng
  FrequencyTracker();

  // H\xE0m th\xEAm m\u1ED9t s\u1ED1 v\xE0o c\u1EA5u tr\xFAc d\u1EEF li\u1EC7u
  void add(int number) {
    // L\u1EA5y t\u1EA7n s\u1ED1 hi\u1EC7n t\u1EA1i c\u1EE7a s\u1ED1
    int currentFrequency = numberFrequency[number] ?? 0;

    // C\u1EADp nh\u1EADt t\u1EA7n su\u1EA5t hi\u1EC7n t\u1EA1i
    if (currentFrequency > 0) {
      frequencyCount[currentFrequency] = frequencyCount[currentFrequency]! - 1;
      if (frequencyCount[currentFrequency] == 0) {
        frequencyCount.remove(currentFrequency);
      }
    }

    // T\u0103ng t\u1EA7n s\u1ED1 c\u1EE7a s\u1ED1
    int newFrequency = currentFrequency + 1;
    numberFrequency[number] = newFrequency;

    // C\u1EADp nh\u1EADt t\u1EA7n su\u1EA5t m\u1EDBi
    frequencyCount[newFrequency] = (frequencyCount[newFrequency] ?? 0) + 1;
  }

  // H\xE0m x\xF3a m\u1ED9t l\u1EA7n xu\u1EA5t hi\u1EC7n c\u1EE7a s\u1ED1 t\u1EEB c\u1EA5u tr\xFAc d\u1EEF li\u1EC7u
  void deleteOne(int number) {
    // L\u1EA5y t\u1EA7n s\u1ED1 hi\u1EC7n t\u1EA1i c\u1EE7a s\u1ED1
    int currentFrequency = numberFrequency[number] ?? 0;

    // N\u1EBFu s\u1ED1 kh\xF4ng t\u1ED3n t\u1EA1i, kh\xF4ng l\xE0m g\xEC c\u1EA3
    if (currentFrequency == 0) {
      return;
    }

    // C\u1EADp nh\u1EADt t\u1EA7n su\u1EA5t hi\u1EC7n t\u1EA1i
    frequencyCount[currentFrequency] = frequencyCount[currentFrequency]! - 1;
    if (frequencyCount[currentFrequency] == 0) {
      frequencyCount.remove(currentFrequency);
    }

    // Gi\u1EA3m t\u1EA7n s\u1ED1 c\u1EE7a s\u1ED1
    int newFrequency = currentFrequency - 1;
    if (newFrequency > 0) {
      numberFrequency[number] = newFrequency;
      // C\u1EADp nh\u1EADt t\u1EA7n su\u1EA5t m\u1EDBi
      frequencyCount[newFrequency] = (frequencyCount[newFrequency] ?? 0) + 1;
    } else {
      numberFrequency.remove(number);
    }
  }

  // H\xE0m ki\u1EC3m tra xem c\xF3 s\u1ED1 n\xE0o c\xF3 t\u1EA7n su\u1EA5t c\u1EE5 th\u1EC3 trong c\u1EA5u tr\xFAc d\u1EEF li\u1EC7u hay kh\xF4ng
  bool hasFrequency(int frequency) {
    return frequencyCount[frequency] != null && frequencyCount[frequency]! > 0;
  }
}

```