# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5564218/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5564218/)

---

```Java []
public class Solution {

    private static final int START_NODE = 0;
    private int numberOfNodes;

    public int reachableNodes(int numberOfNodes, int[][] edges, int[] restricted) {
        this.numberOfNodes = numberOfNodes;
        boolean[] quickAccessRestricted = createQuickAccessRestricted(restricted);
        UnionFind unionFind = new UnionFind(numberOfNodes);

        joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted);
        return countReachableNodesFromStart(unionFind, quickAccessRestricted);
    }

    private boolean[] createQuickAccessRestricted(int[] restricted) {
        boolean[] quickAccessRestricted = new boolean[numberOfNodes];
        for (int value : restricted) {
            quickAccessRestricted[value] = true;
        }
        return quickAccessRestricted;
    }

    private void joinReachableNodesFromStart(UnionFind unionFind, int[][] edges, boolean[] quickAccessRestricted) {
        for (int[] edge : edges) {
            int first = edge[0];
            int second = edge[1];
            if (quickAccessRestricted[first] || quickAccessRestricted[second]) {
                continue;
            }
            unionFind.join(first, second);
        }
    }

    private int countReachableNodesFromStart(UnionFind unionFind, boolean[] quickAccessRestricted) {
        int numberOfReachableNodesFromStart = 0;
        for (int node = 0; node < numberOfNodes; ++node) {
            if (quickAccessRestricted[node]) {
                continue;
            }
            if (unionFind.findParent(node) == START_NODE) {
                ++numberOfReachableNodesFromStart;
            }
        }
        return numberOfReachableNodesFromStart;
    }
}

class UnionFind {

    private final int[] parent;

    UnionFind(int numberOfNodes) {
        parent = new int[numberOfNodes];
        for (int node = 0; node < numberOfNodes; ++node) {
            parent[node] = node;
        }
    }

    int findParent(int node) {
        if (parent[node] != node) {
            parent[node] = findParent(parent[node]);
        }
        return parent[node];
    }

    void join(int first, int second) {
        first = findParent(first);
        second = findParent(second);
        if (first == second) {
            return;
        }
        if (first < second) {
            parent[second] = first;
        } else {
            parent[first] = second;
        }
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfNodes
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (numberOfNodes, edges, restricted) {
    this.START_NODE = 0;
    this.numberOfNodes = numberOfNodes;

    const quickAccessRestricted = createQuickAccessRestricted(restricted);
    const unionFind = new UnionFind(this.numberOfNodes);

    joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted);
    return countReachableNodesFromStart(unionFind, quickAccessRestricted);
};

/**
 * @param {number[]} restricted
 * @return {boolean[]}
 */
function createQuickAccessRestricted(restricted) {
    const quickAccessRestricted = new Array(this.numberOfNodes);
    for (let value of restricted) {
        quickAccessRestricted[value] = true;
    }
    return quickAccessRestricted;
}

/**
 * @param {UnionFind} unionFind
 * @param {number[][]} edges
 * @param {boolean[]} quickAccessRestricted
 * @return {void}
 */
function joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted) {
    for (let edge of edges) {
        const first = edge[0];
        const second = edge[1];
        if (quickAccessRestricted[first] || quickAccessRestricted[second]) {
            continue;
        }
        unionFind.join(first, second);
    }
}

/**
 * @param {UnionFind} unionFind
 * @param {boolean[]} quickAccessRestricted
 * @return {number}
 */
function countReachableNodesFromStart(unionFind, quickAccessRestricted) {
    let numberOfReachableNodesFromStart = 0;
    for (let node = 0; node < this.numberOfNodes; ++node) {
        if (quickAccessRestricted[node]) {
            continue;
        }
        if (unionFind.findParent(node) === this.START_NODE) {
            ++numberOfReachableNodesFromStart;
        }
    }
    return numberOfReachableNodesFromStart;
}

class UnionFind {

    #parent;

    /**
     * @param {number} numberOfNodes
     */
    constructor(numberOfNodes) {
        this.#parent = new Array(numberOfNodes);
        for (let node = 0; node < numberOfNodes; ++node) {
            this.#parent[node] = node;
        }
    }

    /**
     * @param {number} node
     * @return {number}
     */
    findParent(node) {
        if (this.#parent[node] !== node) {
            this.#parent[node] = this.findParent(this.#parent[node]);
        }
        return this.#parent[node];
    }

    /**
     * @param {number} first
     * @param {number} second
     * @return {void}
     */
    join(first, second) {
        first = this.findParent(first);
        second = this.findParent(second);
        if (first === second) {
            return;
        }
        if (first < second) {
            this.#parent[second] = first;
        } else {
            this.#parent[first] = second;
        }
    }
}
```
```TypeScript []
function reachableNodes(numberOfNodes: number, edges: number[][], restricted: number[]): number {
    this.START_NODE = 0;
    this.numberOfNodes = numberOfNodes;

    const quickAccessRestricted = createQuickAccessRestricted(restricted);
    const unionFind = new UnionFind(this.numberOfNodes);

    joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted);
    return countReachableNodesFromStart(unionFind, quickAccessRestricted);
};

function createQuickAccessRestricted(restricted: number[]): boolean[] {
    const quickAccessRestricted = new Array(this.numberOfNodes);
    for (let value of restricted) {
        quickAccessRestricted[value] = true;
    }
    return quickAccessRestricted;
}

function joinReachableNodesFromStart(unionFind: UnionFind, edges: number[][], quickAccessRestricted: boolean[]): void {
    for (let edge of edges) {
        const first = edge[0];
        const second = edge[1];
        if (quickAccessRestricted[first] || quickAccessRestricted[second]) {
            continue;
        }
        unionFind.join(first, second);
    }
}

function countReachableNodesFromStart(unionFind: UnionFind, quickAccessRestricted: boolean[]): number {
    let numberOfReachableNodesFromStart = 0;
    for (let node = 0; node < this.numberOfNodes; ++node) {
        if (quickAccessRestricted[node]) {
            continue;
        }
        if (unionFind.findParent(node) === this.START_NODE) {
            ++numberOfReachableNodesFromStart;
        }
    }
    return numberOfReachableNodesFromStart;
}

class UnionFind {

    private parent: number[];

    constructor(numberOfNodes: number) {
        this.parent = new Array(numberOfNodes);
        for (let node = 0; node < numberOfNodes; ++node) {
            this.parent[node] = node;
        }
    }

    findParent(node: number): number {
        if (this.parent[node] !== node) {
            this.parent[node] = this.findParent(this.parent[node]);
        }
        return this.parent[node];
    }

    join(first: number, second: number): void {
        first = this.findParent(first);
        second = this.findParent(second);
        if (first === second) {
            return;
        }
        if (first < second) {
            this.parent[second] = first;
        } else {
            this.parent[first] = second;
        }
    }
}
```
```C++ []
#include <span>
#include <vector>
using namespace std;

class UnionFind {

public:

    vector<int> parent;

    UnionFind() = default;
    ~UnionFind() = default;

    explicit UnionFind(int numberOfNodes) {
        parent.resize(numberOfNodes);
        for (int node = 0; node < numberOfNodes; ++node) {
            parent[node] = node;
        }
    }

    int findParent(int node) {
        if (parent[node] != node) {
            parent[node] = findParent(parent[node]);
        }
        return parent[node];
    }

    void join(int first, int second) {
        first = findParent(first);
        second = findParent(second);
        if (first == second) {
            return;
        }
        if (first < second) {
            parent[second] = first;
        }
        else {
            parent[first] = second;
        }
    }
};

class Solution {

    static const int START_NODE = 0;
    int numberOfNodes = 0;


public:
    int reachableNodes(int numberOfNodes, const vector<vector<int>>& edges, const vector<int>& restricted) {
        this->numberOfNodes = numberOfNodes;
        vector<bool> quickAccessRestricted = createQuickAccessRestricted(restricted);
        UnionFind unionFind(numberOfNodes);

        joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted);
        return countReachableNodesFromStart(unionFind, quickAccessRestricted);
    }

    vector<bool> createQuickAccessRestricted(span<const int> restricted) const {
        vector<bool> quickAccessRestricted(numberOfNodes);
        for (const auto& value : restricted) {
            quickAccessRestricted[value] = true;
        }
        return quickAccessRestricted;
    }

    void joinReachableNodesFromStart(UnionFind& unionFind, span<const vector<int>> edges, const vector<bool>& quickAccessRestricted) const {
        for (const auto& edge : edges) {
            int first = edge[0];
            int second = edge[1];
            if (quickAccessRestricted[first] || quickAccessRestricted[second]) {
                continue;
            }
            unionFind.join(first, second);
        }
    }

    int countReachableNodesFromStart(UnionFind& unionFind, const vector<bool>& quickAccessRestricted) const {
        int numberOfReachableNodesFromStart = 0;
        for (int node = 0; node < numberOfNodes; ++node) {
            if (quickAccessRestricted[node]) {
                continue;
            }
            if (unionFind.findParent(node) == START_NODE) {
                ++numberOfReachableNodesFromStart;
            }
        }
        return numberOfReachableNodesFromStart;
    }
};
```
```C# []
    using System;

    public class Solution
    {
        private static readonly int START_NODE = 0;
        private int numberOfNodes;

        public int ReachableNodes(int numberOfNodes, int[][] edges, int[] restricted)
        {
            this.numberOfNodes = numberOfNodes;
            bool[] quickAccessRestricted = CreateQuickAccessRestricted(restricted);
            UnionFind unionFind = new UnionFind(numberOfNodes);

            JoinReachableNodesFromStart(unionFind, edges, quickAccessRestricted);
            return CountReachableNodesFromStart(unionFind, quickAccessRestricted);
        }

        private bool[] CreateQuickAccessRestricted(int[] restricted)
        {
            bool[] quickAccessRestricted = new bool[numberOfNodes];
            foreach (int value in restricted)
            {
                quickAccessRestricted[value] = true;
            }
            return quickAccessRestricted;
        }

        private void JoinReachableNodesFromStart(UnionFind unionFind, int[][] edges, bool[] quickAccessRestricted)
        {
            foreach (int[] edge in edges)
            {
                int first = edge[0];
                int second = edge[1];
                if (quickAccessRestricted[first] || quickAccessRestricted[second])
                {
                    continue;
                }
                unionFind.Join(first, second);
            }
        }

        private int CountReachableNodesFromStart(UnionFind unionFind, bool[] quickAccessRestricted)
        {
            int numberOfReachableNodesFromStart = 0;
            for (int node = 0; node < numberOfNodes; ++node)
            {
                if (quickAccessRestricted[node])
                {
                    continue;
                }
                if (unionFind.FindParent(node) == START_NODE)
                {
                    ++numberOfReachableNodesFromStart;
                }
            }
            return numberOfReachableNodesFromStart;
        }
    }


    class UnionFind
    {

        private int[] parent;

        public UnionFind(int numberOfNodes)
        {
            parent = new int[numberOfNodes];
            for (int node = 0; node < numberOfNodes; ++node)
            {
                parent[node] = node;
            }
        }

        public int FindParent(int node)
        {
            if (parent[node] != node)
            {
                parent[node] = FindParent(parent[node]);
            }
            return parent[node];
        }

        public void Join(int first, int second)
        {
            first = FindParent(first);
            second = FindParent(second);
            if (first == second)
            {
                return;
            }
            if (first < second)
            {
                parent[second] = first;
            }
            else
            {
                parent[first] = second;
            }
        }
    }
```
```Kotlin []
class Solution {

    private companion object {
        const val START_NODE = 0
    }

    private var numberOfNodes = 0

    fun reachableNodes(numberOfNodes: Int, edges: Array<IntArray>, restricted: IntArray): Int {
        this.numberOfNodes = numberOfNodes
        val quickAccessRestricted: BooleanArray = createQuickAccessRestricted(restricted)
        val unionFind = UnionFind(numberOfNodes)

        joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted)
        return countReachableNodesFromStart(unionFind, quickAccessRestricted)
    }

    private fun createQuickAccessRestricted(restricted: IntArray): BooleanArray {
        val quickAccessRestricted = BooleanArray(numberOfNodes)
        for (value in restricted) {
            quickAccessRestricted[value] = true
        }
        return quickAccessRestricted
    }

    private fun joinReachableNodesFromStart(
        unionFind: UnionFind,
        edges: Array<IntArray>,
        quickAccessRestricted: BooleanArray
    ) {
        for (edge in edges) {
            val first = edge[0]
            val second = edge[1]
            if (quickAccessRestricted[first] || quickAccessRestricted[second]) {
                continue
            }
            unionFind.join(first, second)
        }
    }

    private fun countReachableNodesFromStart(unionFind: UnionFind, quickAccessRestricted: BooleanArray): Int {
        var numberOfReachableNodesFromStart = 0
        for (node in 0..<numberOfNodes) {
            if (quickAccessRestricted[node]) {
                continue
            }
            if (unionFind.findParent(node) == START_NODE) {
                ++numberOfReachableNodesFromStart
            }
        }
        return numberOfReachableNodesFromStart
    }
}

class UnionFind(private val numberOfNodes: Int) {

    private var parent: IntArray = IntArray(numberOfNodes)

    init {
        for (node in 0..<numberOfNodes) {
            parent[node] = node
        }
    }


    fun findParent(node: Int): Int {
        if (parent[node] != node) {
            parent[node] = findParent(parent[node])
        }
        return parent[node]
    }

    fun join(first: Int, second: Int) {
        val first = findParent(first)
        val second = findParent(second)
        if (first == second) {
            return
        }
        if (first < second) {
            parent[second] = first
        } else {
            parent[first] = second
        }
    }
}
```
```Go []
package main

import "fmt"

const START_NODE = 0

var numberOfNodes int

func reachableNodes(totalNodes int, edges [][]int, restricted []int) int {
    numberOfNodes = totalNodes
    var quickAccessRestricted []bool = createQuickAccessRestricted(restricted)
    var unionFind = NewUnionFind(numberOfNodes)

    joinReachableNodesFromStart(unionFind, edges, quickAccessRestricted)
    return countReachableNodesFromStart(unionFind, quickAccessRestricted)
}

func createQuickAccessRestricted(restricted []int) []bool {
    quickAccessRestricted := make([]bool, numberOfNodes)
    for _, value := range restricted {
        quickAccessRestricted[value] = true
    }
    return quickAccessRestricted
}

func joinReachableNodesFromStart(unionFind *UnionFind, edges [][]int, quickAccessRestricted []bool) {
    for _, edge := range edges {
        first := edge[0]
        second := edge[1]
        if quickAccessRestricted[first] || quickAccessRestricted[second] {
            continue
        }
        unionFind.join(first, second)
    }
}

func countReachableNodesFromStart(unionFind *UnionFind, quickAccessRestricted []bool) int {
    var numberOfReachableNodesFromStart = 0
    for node := 0; node < numberOfNodes; node++ {
        if quickAccessRestricted[node] {
            continue
        }
        if unionFind.findParent(node) == START_NODE {
            numberOfReachableNodesFromStart++
        }
    }
    return numberOfReachableNodesFromStart
}

type UnionFind struct {
    numberOfNodes int
    parent        []int
}

func NewUnionFind(numberOfNodes int) *UnionFind {
    unionFind := &UnionFind{
        numberOfNodes: numberOfNodes,
        parent:        make([]int, numberOfNodes)}

    for node := 0; node < numberOfNodes; node++ {
        unionFind.parent[node] = node
    }
    return unionFind
}

func (unionFind *UnionFind) findParent(node int) int {
    if unionFind.parent[node] != node {
        unionFind.parent[node] = unionFind.findParent(unionFind.parent[node])
    }
    return unionFind.parent[node]
}

func (unionFind *UnionFind) join(first int, second int) {
    first = unionFind.findParent(first)
    second = unionFind.findParent(second)
    if first == second {
        return
    }
    if first < second {
        unionFind.parent[second] = first
    } else {
        unionFind.parent[first] = second
    }
}
```