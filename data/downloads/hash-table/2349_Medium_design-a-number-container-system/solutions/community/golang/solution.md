# Without sorted set

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2419583/](https://leetcode.com/problems/design-a-number-container-system/solutions/2419583/)

---

```
type NumberContainers struct {
	indexMap    map[int]int
	numberMap   map[int]map[int]struct{}
	minIndexMap map[int]int
}

func Constructor() NumberContainers {
	return NumberContainers{
		indexMap:    make(map[int]int),
		numberMap:   make(map[int]map[int]struct{}),
		minIndexMap: make(map[int]int),
	}
}

func (this *NumberContainers) Change(index int, number int) {
	oldNumber, exist := this.indexMap[index]
	this.indexMap[index] = number

	indexSet, ok := this.numberMap[number]

	if !ok {
		this.minIndexMap[number] = index
		indexSet = make(map[int]struct{})
	} else if index < this.minIndexMap[number] {
		this.minIndexMap[number] = index
	}

	indexSet[index] = struct{}{}
	this.numberMap[number] = indexSet

	if exist && oldNumber != number {
		delete(this.numberMap[oldNumber], index)

		if len(this.numberMap[oldNumber]) == 0 {
			delete(this.numberMap, oldNumber)
			return
		}

		if this.minIndexMap[oldNumber] == index {
			minIndex := 1000000000

			for idx := range this.numberMap[oldNumber] {
				if idx < minIndex {
					minIndex = idx
				}
			}

			this.minIndexMap[oldNumber] = minIndex
		}
	}
}

func (this *NumberContainers) Find(number int) int {
	_, ok := this.numberMap[number]

	if !ok {
		return -1
	}

	return this.minIndexMap[number]
}

```