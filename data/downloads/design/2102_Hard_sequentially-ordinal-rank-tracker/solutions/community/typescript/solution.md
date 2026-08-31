# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5634672/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5634672/)

---

```Java []
import java.util.PriorityQueue;

public class SORTracker {

    private record Place(String name, int score){}

    private final PriorityQueue<Place> minHeap = new PriorityQueue<>(
            (x, y) -> comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x, y));

    private final PriorityQueue<Place> maxHeap = new PriorityQueue<>(
            (x, y) -> comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x, y));

    private int numberOfQueries;

    private int comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(Place x, Place y) {
        return (x.score == y.score) ? (y.name.compareTo(x.name)) : (x.score - y.score);
    }

    private int comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(Place x, Place y) {
        return (x.score == y.score) ? (x.name.compareTo(y.name)) : (y.score - x.score);
    }

    public void add(String name, int score) {
        minHeap.add(new Place(name, score));
        if (minHeap.size() > numberOfQueries + 1) {
            maxHeap.add(minHeap.poll());
        }
    }

    public String get() {
        ++numberOfQueries;

        Place placeWithRankEqualToTheNumberOfQueries = minHeap.peek();
        if (!maxHeap.isEmpty()) {
            minHeap.add(maxHeap.poll());
        }
        return placeWithRankEqualToTheNumberOfQueries.name;
    }
}
```
```JavaScript []
// const {PriorityQueue} = require('@datastructures-js/priority-queue');
/*
 PriorityQueue is internally included in the solution\xA0file on leetcode.
 So, when running\xA0the code\xA0on leetcode it should stay commented out.\xA0
 It is mentioned here as a comment, just for information about 
 which external\xA0library is applied for this data structure.
 */

class SORTracker {

    #minHeap = new MinPriorityQueue(
            {compare: (x, y) => this.#comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x, y)});

    #maxHeap = new MaxPriorityQueue(
            {compare: (x, y) => this.#comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x, y)});

    #numberOfQueries = 0;

    /** 
     * @param {Place} x 
     * @param {Place} y
     * @return {number}
     */
    #comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x, y) {
        return (x.score === y.score) ? (y.name.localeCompare(x.name)) : (x.score - y.score);
    }

    /** 
     * @param {Place} x 
     * @param {Place} y
     * @return {number}
     */
    #comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x, y) {
        return (x.score === y.score) ? (x.name.localeCompare(y.name)) : (y.score - x.score);
    }

    /** 
     * @param {string} name 
     * @param {number} score
     * @return {void}
     */
    add(name, score) {
        this.#minHeap.enqueue(new Place(name, score));
        if (this.#minHeap.size() > this.#numberOfQueries + 1) {
            this.#maxHeap.enqueue(this.#minHeap.dequeue());
        }
    }

    /**
     * @return {string}
     */
    get() {
        ++this.#numberOfQueries;

        const placeWithRankEqualToTheNumberOfQueries = this.#minHeap.front();
        if (!this.#maxHeap.isEmpty()) {
            this.#minHeap.enqueue(this.#maxHeap.dequeue());
        }
        return placeWithRankEqualToTheNumberOfQueries.name;
    }
}

/** 
 * @param {string} name 
 * @param {number} score
 */
function Place(name, score) {
    this.name = name;
    this.score = score;
}
```
```TypeScript []
// const {PriorityQueue} = require('@datastructures-js/priority-queue');
/*
 PriorityQueue is internally included in the solution\xA0file on leetcode.
 So, when running\xA0the code\xA0on leetcode it should stay commented out.\xA0
 It is mentioned here as a comment, just for information about 
 which external\xA0library is applied for this data structure.
*/

class SORTracker {

    private minHeap = new MinPriorityQueue(
        { compare: (x, y) => this.comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x, y) });

    private maxHeap = new MaxPriorityQueue(
        { compare: (x, y) => this.comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x, y) });

    private numberOfQueries: number = 0;

    private comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x: Place, y: Place): number {
        return (x.score === y.score) ? (y.name.localeCompare(x.name)) : (x.score - y.score);
    }

    private comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x: Place, y: Place): number {
        return (x.score === y.score) ? (x.name.localeCompare(y.name)) : (y.score - x.score);
    }

    add(name: string, score: number): void {
        this.minHeap.enqueue(new Place(name, score));
        if (this.minHeap.size() > this.numberOfQueries + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }

    get(): string {
        ++this.numberOfQueries;

        const placeWithRankEqualToTheNumberOfQueries = this.minHeap.front();
        if (!this.maxHeap.isEmpty()) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
        return placeWithRankEqualToTheNumberOfQueries.name;
    }
}

class Place {

    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}
```
```C++ []
/*
// The code will run faster with ios::sync_with_stdio(0).
// However, this should not be used in production code and interactive problems.
// In this particular problem, it is ok to apply ios::sync_with_stdio(0).

// Many of the top-ranked C++ solutions for time on leetcode apply this trick,
// so, for a fairer assessment of the time percentile of my code
// you could outcomment the lambda expression below for a faster run.
const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class SORTracker {

    struct Place {
        string name;
        int score;
        Place(const string& name, int score) : name{ name }, score{ score } {}
    };

    struct comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName {
        bool operator()(const Place& x, const Place& y) const {
            return (x.score == y.score) ? (y.name > x.name) : (x.score > y.score);
        }
    };

    struct comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName {
        bool operator()(const Place& x, const Place& y) const {
            return (x.score == y.score) ? (y.name < x.name) : (x.score < y.score);
        }
    };

    using MinHeap = priority_queue<Place, vector<Place>,
                    comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName>;

    using MaxHeap = priority_queue<Place, vector<Place>,
                    comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName>;

    MinHeap minHeap;
    MaxHeap maxHeap;

    int numberOfQueries = 0;

public:
    void add(string name, int score) {
        minHeap.emplace(name, score);
        if (minHeap.size() > numberOfQueries + 1) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }

    string get() {
        ++numberOfQueries;
        
        Place placeWithRankEqualToTheNumberOfQueries = minHeap.top();
        if (!maxHeap.empty()) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }      
        return placeWithRankEqualToTheNumberOfQueries.name;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class SORTracker
{
    private sealed record Place(String name, int score){}

    private readonly PriorityQueue<Place, Place> minHeap = new PriorityQueue<Place, Place>(
            comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName);

    private readonly PriorityQueue<Place, Place> maxHeap = new PriorityQueue<Place, Place>(
            comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName);

    private int numberOfQueries;

    private static Comparer<Place> comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName
         = Comparer<Place>.Create((x, y) => (x.score == y.score) ? (y.name.CompareTo(x.name)) : (x.score - y.score));

    private static Comparer<Place> comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName
        = Comparer<Place>.Create((x, y) => (x.score == y.score) ? (x.name.CompareTo(y.name)) : (y.score - x.score));

    public void Add(string name, int score)
    {
        Place place = new Place(name, score);
        minHeap.Enqueue(place, place);

        if (minHeap.Count > numberOfQueries + 1)
        {
            place = minHeap.Dequeue();
            maxHeap.Enqueue(place, place);
        }
    }

    public string Get()
    {
        ++numberOfQueries;

        Place placeWithRankEqualToTheNumberOfQueries = minHeap.Peek();
        if (maxHeap.Count > 0)
        {
            Place place = maxHeap.Dequeue();
            minHeap.Enqueue(place, place);
        }
        return placeWithRankEqualToTheNumberOfQueries.name;
    }
}
```
```Kotlin []
import java.util.PriorityQueue

class SORTracker() {

    private data class Place(val name: String, val score: Int){}

    private val minHeap =
        PriorityQueue<Place>() { x, y -> comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x, y) }

    private val maxHeap =
        PriorityQueue<Place>() { x, y -> comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x, y) }

    private var numberOfQueries: Int = 0

    private fun comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(x: Place, y: Place): Int {
        return if (x.score == y.score) (y.name.compareTo(x.name)) else (x.score - y.score)
    }

    private fun comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(x: Place, y: Place): Int {
        return if (x.score == y.score) (x.name.compareTo(y.name)) else (y.score - x.score)
    }

    fun add(name: String, score: Int) {
        minHeap.add(Place(name, score))
        if (minHeap.size > numberOfQueries + 1) {
            maxHeap.add(minHeap.poll())
        }
    }

    fun get(): String {
        ++numberOfQueries

        val placeWithRankEqualToTheNumberOfQueries = minHeap.peek()
        if (!maxHeap.isEmpty()) {
            minHeap.add(maxHeap.poll())
        }
        return placeWithRankEqualToTheNumberOfQueries.name
    }
}
```
```Go []
package main

import (
    "container/heap"
    "fmt"
)

type SORTracker struct {
    minHeap         PriorityQueue
    maxHeap         PriorityQueue
    numberOfQueries int
}

func Constructor() SORTracker {
    sortracker := SORTracker{
        minHeap: PriorityQueue{
            container:  make([]*Place, 0),
            comparator: comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName},
        maxHeap: PriorityQueue{
            container:  make([]*Place, 0),
            comparator: comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName},
        numberOfQueries: 0,
    }
    return sortracker
}

func (this *SORTracker) Add(name string, score int) {
    heap.Push(&this.minHeap, &Place{name: name, score: score})
    if this.minHeap.Len() > this.numberOfQueries+1 {
        heap.Push(&this.maxHeap, heap.Pop(&this.minHeap).(*Place))
    }
}

func (this *SORTracker) Get() string {
    this.numberOfQueries++

    placeWithRankEqualToTheNumberOfQueries := this.minHeap.container[0]
    if this.maxHeap.Len() > 0 {
        heap.Push(&this.minHeap, heap.Pop(&this.maxHeap).(*Place))
    }
    return placeWithRankEqualToTheNumberOfQueries.name
}

func Ternary[T any](condition bool, first T, second T) T {
    if condition {
        return first
    }
    return second
}

type Place struct {
    name  string
    score int
}

type PriorityQueue struct {
    container  []*Place
    comparator func(container []*Place, first, second int) bool
}

func comparatorMinScoreOnTopByEqualScoresLexicographicallyLargestName(container []*Place, first int, second int) bool {
    return Ternary((container[first].score == container[second].score),
                   (container[second].name < container[first].name),
                   (container[first].score < container[second].score))
}

func comparatorMaxScoreOnTopByEqualScoresLexicographicallySmallestName(container []*Place, first int, second int) bool {
    return Ternary((container[first].score == container[second].score),
                   (container[second].name > container[first].name),
                   (container[first].score > container[second].score))
}

func (pq PriorityQueue) Len() int {
    return len(pq.container)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq.comparator(pq.container, first, second)
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq.container[first], pq.container[second] = pq.container[second], pq.container[first]
}

func (pq *PriorityQueue) Push(object any) {
    place := object.(*Place)
    (*pq).container = append((*pq).container, place)
}

func (pq *PriorityQueue) Pop() any {
    length := len((*pq).container)
    place := ((*pq).container)[length-1]
    ((*pq).container)[length-1] = nil
    ((*pq).container) = ((*pq).container)[0 : length-1]
    return place
}
```