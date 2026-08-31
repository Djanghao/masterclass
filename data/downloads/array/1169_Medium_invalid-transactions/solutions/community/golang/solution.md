# Solution in Go

**Author:** aaman007
**Votes:** 0
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/5817635/](https://leetcode.com/problems/invalid-transactions/solutions/5817635/)

---

# Code
```golang [Naive]
// O(n^2) Time Complexity
type transaction struct {
	name   string
	time   int
	amount int
	city   string
}

type transactionGroup struct {
	id int
	t  transaction
}

func unpackTransaction(transactionStr string) transaction {
	splits := strings.Split(transactionStr, ",")
	time, _ := strconv.Atoi(splits[1])
	amount, _ := strconv.Atoi(splits[2])
	return transaction{
		name:   splits[0],
		time:   time,
		amount: amount,
		city:   splits[3],
	}
}

func invalidTransactions(transactions []string) []string {
	var unpackedTransactions []transaction
	transactionGroups := make(map[string][]transactionGroup)
	for index, t := range transactions {
		unpacked := unpackTransaction(t)
		unpackedTransactions = append(unpackedTransactions, unpacked)
		transactionGroups[unpacked.name] = append(
			transactionGroups[unpacked.name],
			transactionGroup{
				id: index,
				t:  unpacked,
			})
	}

	var invalidTransactions []string
	for index, t := range unpackedTransactions {
		if t.amount > 1000 {
			invalidTransactions = append(invalidTransactions, transactions[index])
			continue
		}
		for _, member := range transactionGroups[t.name] {
			if member.id == index || t.city == member.t.city {
				continue
			}
			if t.time-member.t.time < -60 || t.time-member.t.time > 60 {
				continue
			}
			invalidTransactions = append(invalidTransactions, transactions[index])
			break
		}
	}
	return invalidTransactions
}
```
```golang [Optimized]
// O(nlogn) Time Complexity
type Transaction struct {
	name   string
	time   int
	amount int
	city   string
}

func (t *Transaction) Less(other *Transaction) bool {
    return t.time < other.time
}

func (t *Transaction) InvalidAmount() bool {
    return t.amount > 1000
}

func (t *Transaction) NameAndCityStr() string {
    return fmt.Sprintf("%v::%v", t.name, t.city)
}

func (t *Transaction) Pack() string {
    return fmt.Sprintf("%v,%v,%v,%v", t.name, t.time, t.amount, t.city)
}

type RangeTracker struct {
    transactions []*Transaction
    curIndex int
    leftIndex int
    rightIndex int
    nameCount map[string]int
    nameAndCityCount map[string]int
}

func NewRangeTracker(transactions []*Transaction) *RangeTracker {
    copied := make([]*Transaction, len(transactions))
    copy(copied, transactions)
    sort.Slice(copied, func(i, j int) bool {
        return copied[i].Less(copied[j])
    })
    return &RangeTracker{
        transactions: copied,
        curIndex: -1,
        nameCount: make(map[string]int),
        nameAndCityCount: make(map[string]int),
    }
}

func (tr *RangeTracker) cur() *Transaction {
    return tr.transactions[tr.curIndex]
}

func (tr *RangeTracker) HasNext() bool {
    return tr.curIndex < len(tr.transactions) - 1
}

func (tr *RangeTracker) Next() (*Transaction, bool) {
    if tr.curIndex == len(tr.transactions) - 1 {
        panic("no more items left!")
    }
    tr.curIndex++
    tr.shiftRange()
    return tr.cur(), tr.invalidTransaction()
}

func (tr *RangeTracker) withinLimits(other *Transaction) bool {
    return other.time - tr.cur().time >= -60 && other.time - tr.cur().time <= 60
}

func (tr *RangeTracker) add(other *Transaction) bool {
    if !tr.withinLimits(other) {
        return false
    }
    tr.nameCount[other.name]++
    tr.nameAndCityCount[other.NameAndCityStr()]++
    return true
}

func (tr *RangeTracker) remove(other *Transaction) bool {
    if tr.withinLimits(other) {
        return false
    }
    tr.nameCount[other.name]--
    tr.nameAndCityCount[other.NameAndCityStr()]--
    return true
}

func (tr *RangeTracker) invalidTransaction() bool {
    if tr.cur().InvalidAmount() {
        return true
    }
    return tr.nameCount[tr.cur().name] != tr.nameAndCityCount[tr.cur().NameAndCityStr()]
}

func (tr *RangeTracker) shiftRange() {
    for tr.rightIndex < len(tr.transactions) && tr.add(tr.transactions[tr.rightIndex]) {
        tr.rightIndex++
    }
    for tr.leftIndex < len(tr.transactions) && tr.remove(tr.transactions[tr.leftIndex]) {
        tr.leftIndex++
    }
}

func unpackTransaction(transactionStr string) *Transaction {
	splits := strings.Split(transactionStr, ",")
	time, err := strconv.Atoi(splits[1])
    if err != nil {
        panic(err)
    }
	amount, err := strconv.Atoi(splits[2])
    if err != nil {
        panic(err)
    }
	return &Transaction{
		name:   splits[0],
		time:   time,
		amount: amount,
		city:   splits[3],
	}
}

func unpackTransactions(transactions []string) []*Transaction {
	var unpackedTransactions []*Transaction
	for _, t := range transactions {
		unpackedTransactions = append(unpackedTransactions, unpackTransaction(t))
	}
    return unpackedTransactions
}

func invalidTransactions(transactions []string) []string {
	var invalidTransactions []string
    tracker := NewRangeTracker(unpackTransactions(transactions))
    for tracker.HasNext() {
        if t, invalid := tracker.Next(); invalid {
            invalidTransactions = append(invalidTransactions, t.Pack())
        }
    }
	return invalidTransactions
}
```