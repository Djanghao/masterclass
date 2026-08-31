# The optimal solution uses recursion ⭐⭐

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/5498599/](https://leetcode.com/problems/iterator-for-combination/solutions/5498599/)

---



# Code
```
class CombinationIterator {
  String _characters;
  int _combinationLength;
  List<String> _combinations;
  int _index;

  CombinationIterator(String characters, int combinationLength)
      : _characters = characters,
        _combinationLength = combinationLength,
        _combinations = [],
        _index = 0 {
    _generateCombinations('', 0);
  }

  void _generateCombinations(String prefix, int start) {
    if (prefix.length == _combinationLength) {
      _combinations.add(prefix);
      return;
    }
    for (int i = start; i < _characters.length; i++) {
      _generateCombinations(prefix + _characters[i], i + 1);
    }
  }

  String next() {
    if (hasNext()) {
      return _combinations[_index++];
    }
    return '';
  }

  bool hasNext() {
    return _index < _combinations.length;
  }
}
```