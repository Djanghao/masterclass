# C++ solution math

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4523936/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4523936/)

---

```
int mostExpensiveItem(int primeOne, int primeTwo) {
	return primeOne * primeTwo - primeOne - primeTwo;
}
```