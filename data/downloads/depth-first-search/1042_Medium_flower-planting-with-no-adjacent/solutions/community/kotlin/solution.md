# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/5908185/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/5908185/)

---

```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int NO_FLOWERS = 0;
    private static final int[] FLOWER_TYPES = {1, 2, 3, 4};
    private static final int BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes();

    public int[] gardenNoAdj(int numberOfGardens, int[][] paths) {
        List<Integer>[] undirectedGraph = createUndirectedGraph(numberOfGardens, paths);
        return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph);
    }

    private int[] createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(int numberOfGardens, List<Integer>[] undirctedGraph) {
        int[] plantedGardens = new int[numberOfGardens];
        for (int garden = 0; garden < numberOfGardens; ++garden) {
            if (plantedGardens[garden] == NO_FLOWERS) {
                plantedGardens[garden] = getOneAvailableFlowerType(undirctedGraph[garden], plantedGardens);
            }
        }
        return plantedGardens;
    }

    private List<Integer>[] createUndirectedGraph(int numberOfGardens, int[][] paths) {
        List<Integer>[] graph = new ArrayList[numberOfGardens];
        for (int i = 0; i < numberOfGardens; ++i) {
            graph[i] = new ArrayList<>();
        }

        for (int[] path : paths) {
            int fristGarden = getZeroBasedIndexFromOneBasedIndex(path[0]);
            int secondGarden = getZeroBasedIndexFromOneBasedIndex(path[1]);
            graph[fristGarden].add(secondGarden);
            graph[secondGarden].add(fristGarden);
        }
        return graph;
    }

    private int getZeroBasedIndexFromOneBasedIndex(int oneBasedIndex) {
        return oneBasedIndex - 1;
    }

    private static int createBitstampAllFlowerTypes() {
        int bitstampAllFlowerTypes = 0;
        for (int flowerType : FLOWER_TYPES) {
            bitstampAllFlowerTypes ^= (1 << flowerType);
        }
        return bitstampAllFlowerTypes;
    }

    private int getOneAvailableFlowerType(List<Integer> neighbourGardens, int[] plantedGardens) {
        int bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens);
        int flowerType = 0;
        while ((bitstamptOfAvailableFlowerTypes & 1) == 0) {
            ++flowerType;
            bitstamptOfAvailableFlowerTypes >>= 1;
        }
        return flowerType;
    }

    private int getBitstamptOfAvailableFlowerTypes(List<Integer> neighbourGardens, int[] plantedGardens) {
        int bitstamptOfAvailableFlowerTypes = 0;
        for (int garden : neighbourGardens) {
            if (plantedGardens[garden] != NO_FLOWERS) {
                bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden];
            }
        }
        bitstamptOfAvailableFlowerTypes ^= BITSTAMP_ALL_FLOWER_TYPES;
        return bitstamptOfAvailableFlowerTypes;
    }
}
```
```JavaScript []
/**
 * @param {number} numberOfGardens
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (numberOfGardens, paths) {
    this.NO_FLOWERS = 0;
    this.FLOWER_TYPES = [1, 2, 3, 4];
    this.BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes();

    const undirectedGraph = createUndirectedGraph(numberOfGardens, paths);
    return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph);
};

/**
 * @param {number} numberOfGardens
 * @param {number[][]} undirectedGraph
 * @return {number[]}
 */
function createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph) {
    const plantedGardens = new Array(numberOfGardens).fill(this.NO_FLOWERS);
    for (let garden = 0; garden < numberOfGardens; ++garden) {
        if (plantedGardens[garden] === this.NO_FLOWERS) {
            plantedGardens[garden] = getOneAvailableFlowerType(undirectedGraph[garden], plantedGardens);
        }
    }
    return plantedGardens;
}

/**
 * @param {number} numberOfGardens
 * @param {number[][]} paths
 * @return {number[][]}
 */
function createUndirectedGraph(numberOfGardens, paths) {
    const graph = Array.from(new Array(numberOfGardens), () => new Array());
    for (let path of paths) {
        const fristGarden = getZeroBasedIndexFromOneBasedIndex(path[0]);
        const secondGarden = getZeroBasedIndexFromOneBasedIndex(path[1]);
        graph[fristGarden].push(secondGarden);
        graph[secondGarden].push(fristGarden);
    }
    return graph;
}

/**
 * @param {number} oneBasedIndex
 * @return {number}
 */
function getZeroBasedIndexFromOneBasedIndex(oneBasedIndex) {
    return oneBasedIndex - 1;
}

/**
 * @return {number}
 */
function createBitstampAllFlowerTypes() {
    let bitstampAllFlowerTypes = 0;
    for (let flowerType of this.FLOWER_TYPES) {
        bitstampAllFlowerTypes ^= (1 << flowerType);
    }
    return bitstampAllFlowerTypes;
}

/**
 * @param {number[]} neighbourGardens
 * @param {number[]} plantedGardens
 * @return {number}
 */
function getOneAvailableFlowerType(neighbourGardens, plantedGardens) {
    let bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens);
    let flowerType = 0;
    while ((bitstamptOfAvailableFlowerTypes & 1) === 0) {
        ++flowerType;
        bitstamptOfAvailableFlowerTypes >>= 1;
    }
    return flowerType;
}

/**
 * @param {number[]} neighbourGardens
 * @param {number[]} plantedGardens
 * @return {number}
 */
function getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens) {
    let bitstamptOfAvailableFlowerTypes = 0;
    for (let garden of neighbourGardens) {
        if (plantedGardens[garden] !== this.NO_FLOWERS) {
            bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden];
        }
    }
    bitstamptOfAvailableFlowerTypes ^= this.BITSTAMP_ALL_FLOWER_TYPES;
    return bitstamptOfAvailableFlowerTypes;
}
```
```TypeScript []
function gardenNoAdj(numberOfGardens: number, paths: number[][]): number[] {
    this.NO_FLOWERS = 0;
    this.FLOWER_TYPES = [1, 2, 3, 4];
    this.BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes();

    const undirectedGraph = createUndirectedGraph(numberOfGardens, paths);
    return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph);
};

function createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens: number, undirectedGraph: number[][]): number[] {
    const plantedGardens = new Array(numberOfGardens).fill(this.NO_FLOWERS);
    for (let garden = 0; garden < numberOfGardens; ++garden) {
        if (plantedGardens[garden] === this.NO_FLOWERS) {
            plantedGardens[garden] = getOneAvailableFlowerType(undirectedGraph[garden], plantedGardens);
        }
    }
    return plantedGardens;
}

function createUndirectedGraph(numberOfGardens: number, paths: number[][]): number[][] {
    const graph = Array.from(new Array(numberOfGardens), () => new Array());
    for (let path of paths) {
        const fristGarden = getZeroBasedIndexFromOneBasedIndex(path[0]);
        const secondGarden = getZeroBasedIndexFromOneBasedIndex(path[1]);
        graph[fristGarden].push(secondGarden);
        graph[secondGarden].push(fristGarden);
    }
    return graph;
}

function getZeroBasedIndexFromOneBasedIndex(oneBasedIndex: number): number {
    return oneBasedIndex - 1;
}

function createBitstampAllFlowerTypes(): number {
    let bitstampAllFlowerTypes = 0;
    for (let flowerType of this.FLOWER_TYPES) {
        bitstampAllFlowerTypes ^= (1 << flowerType);
    }
    return bitstampAllFlowerTypes;
}

function getOneAvailableFlowerType(neighbourGardens: number[], plantedGardens: number[]): number {
    let bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens);
    let flowerType = 0;
    while ((bitstamptOfAvailableFlowerTypes & 1) === 0) {
        ++flowerType;
        bitstamptOfAvailableFlowerTypes >>= 1;
    }
    return flowerType;
}

function getBitstamptOfAvailableFlowerTypes(neighbourGardens: number[], plantedGardens: number[]): number {
    let bitstamptOfAvailableFlowerTypes = 0;
    for (let garden of neighbourGardens) {
        if (plantedGardens[garden] !== this.NO_FLOWERS) {
            bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden];
        }
    }
    bitstamptOfAvailableFlowerTypes ^= this.BITSTAMP_ALL_FLOWER_TYPES;
    return bitstamptOfAvailableFlowerTypes;
}
```
```C++ []
#include <span>
#include <array>
#include <vector>
using namespace std;

/*
 The code will run faster with ios::sync_with_stdio(0).
 However, this should not be used in production code and interactive problems.
 In this particular problem, it is ok to apply ios::sync_with_stdio(0).

 Many of the top-ranked C++ solutions for time on leetcode apply this trick,
 so, for a fairer assessment of the time percentile of my code
 you could outcomment the lambda expression below for a faster run.
*/

/*
 const static auto speedup = [] {
	ios::sync_with_stdio(0);
	return nullptr;
 }();
*/

class Solution {

    static constexpr int createBitstampAllFlowerTypes() {
        int bitstampAllFlowerTypes = 0;
        for (const auto& flowerType : FLOWER_TYPES) {
            bitstampAllFlowerTypes ^= (1 << flowerType);
        }
        return bitstampAllFlowerTypes;
    }

    static const int NO_FLOWERS = 0;
    static constexpr array<int, 4> FLOWER_TYPES = { 1, 2, 3, 4 };
    inline static const int BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes();

public:
    vector<int> gardenNoAdj(int numberOfGardens, const vector<vector<int>>& paths) const {
        vector<vector<int>> undirectedGraph = createUndirectedGraph(numberOfGardens, paths);
        return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph);
    }

private:
    vector<int> createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(int numberOfGardens, span<const vector<int>> undirctedGraph) const {
        vector<int> plantedGardens(numberOfGardens);
        for (int garden = 0; garden < numberOfGardens; ++garden) {
            if (plantedGardens[garden] == NO_FLOWERS) {
                plantedGardens[garden] = getOneAvailableFlowerType(undirctedGraph[garden], plantedGardens);
            }
        }
        return plantedGardens;
    }

    vector<vector<int>> createUndirectedGraph(int numberOfGardens, span<const vector<int>> paths) const {
        vector<vector<int>> graph(numberOfGardens);

        for (const auto& path : paths) {
            int fristGarden = getZeroBasedIndexFromOneBasedIndex(path[0]);
            int secondGarden = getZeroBasedIndexFromOneBasedIndex(path[1]);
            graph[fristGarden].push_back(secondGarden);
            graph[secondGarden].push_back(fristGarden);
        }
        return graph;
    }

    int getZeroBasedIndexFromOneBasedIndex(int oneBasedIndex) const {
        return oneBasedIndex - 1;
    }

    int getOneAvailableFlowerType(span<const int> neighbourGardens, span<const int> plantedGardens) const {
        int bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens);
        int flowerType = 0;
        while ((bitstamptOfAvailableFlowerTypes & 1) == 0) {
            ++flowerType;
            bitstamptOfAvailableFlowerTypes >>= 1;
        }
        return flowerType;
    }

    int getBitstamptOfAvailableFlowerTypes(span<const int> neighbourGardens, span<const int> plantedGardens) const {
        int bitstamptOfAvailableFlowerTypes = 0;
        for (const auto& garden : neighbourGardens) {
            if (plantedGardens[garden] != NO_FLOWERS) {
                bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden];
            }
        }
        bitstamptOfAvailableFlowerTypes ^= BITSTAMP_ALL_FLOWER_TYPES;
        return bitstamptOfAvailableFlowerTypes;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Solution
{
    private static readonly int NO_FLOWERS = 0;
    private static readonly int[] FLOWER_TYPES = { 1, 2, 3, 4 };
    private static readonly int BITSTAMP_ALL_FLOWER_TYPES = CreateBitstampAllFlowerTypes();
    
    public int[] GardenNoAdj(int numberOfGardens, int[][] paths)
    {
        IList<int>[] undirectedGraph = CreateUndirectedGraph(numberOfGardens, paths);
        return CreatePlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph);
    }

    private int[] CreatePlantedGardensWhereAdjacentGardensHaveDifferentFlowers(int numberOfGardens, IList<int>[] undirctedGraph)
    {
        int[] plantedGardens = new int[numberOfGardens];
        for (int garden = 0; garden < numberOfGardens; ++garden)
        {
            if (plantedGardens[garden] == NO_FLOWERS)
            {
                plantedGardens[garden] = GetOneAvailableFlowerType(undirctedGraph[garden], plantedGardens);
            }
        }
        return plantedGardens;
    }

    private IList<int>[] CreateUndirectedGraph(int numberOfGardens, int[][] paths)
    {
        IList<int>[] graph = new List<int>[numberOfGardens];
        for (int i = 0; i < numberOfGardens; ++i)
        {
            graph[i] = new List<int>();
        }

        foreach (int[] path in paths)
        {
            int fristGarden = GetZeroBasedIndexFromOneBasedIndex(path[0]);
            int secondGarden = GetZeroBasedIndexFromOneBasedIndex(path[1]);
            graph[fristGarden].Add(secondGarden);
            graph[secondGarden].Add(fristGarden);
        }
        return graph;
    }

    private int GetZeroBasedIndexFromOneBasedIndex(int oneBasedIndex)
    {
        return oneBasedIndex - 1;
    }

    private static int CreateBitstampAllFlowerTypes()
    {
        int bitstampAllFlowerTypes = 0;
        foreach (int flowerType in FLOWER_TYPES)
        {
            bitstampAllFlowerTypes ^= (1 << flowerType);
        }
        return bitstampAllFlowerTypes;
    }

    private int GetOneAvailableFlowerType(IList<int> neighbourGardens, int[] plantedGardens)
    {
        int bitstamptOfAvailableFlowerTypes = GetBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens);
        int flowerType = 0;
        while ((bitstamptOfAvailableFlowerTypes & 1) == 0)
        {
            ++flowerType;
            bitstamptOfAvailableFlowerTypes >>= 1;
        }
        return flowerType;
    }

    private int GetBitstamptOfAvailableFlowerTypes(IList<int> neighbourGardens, int[] plantedGardens)
    {
        int bitstamptOfAvailableFlowerTypes = 0;
        foreach (int garden in neighbourGardens)
        {
            if (plantedGardens[garden] != NO_FLOWERS)
            {
                bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden];
            }
        }
        bitstamptOfAvailableFlowerTypes ^= BITSTAMP_ALL_FLOWER_TYPES;
        return bitstamptOfAvailableFlowerTypes;
    }
}
```
```Kotlin []
class Solution {

    private companion object {
        const val NO_FLOWERS = 0
        val FLOWER_TYPES = intArrayOf(1, 2, 3, 4)
        val BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes()

        fun createBitstampAllFlowerTypes(): Int {
            var bitstampAllFlowerTypes = 0
            for (flowerType in FLOWER_TYPES) {
                bitstampAllFlowerTypes = bitstampAllFlowerTypes xor (1 shl flowerType)
            }
            return bitstampAllFlowerTypes
        }
    }

    fun gardenNoAdj(numberOfGardens: Int, paths: Array<IntArray>): IntArray {
        val undirectedGraph = createUndirectedGraph(numberOfGardens, paths)
        return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph)
    }

    private fun createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens: Int, undirctedGraph: List<List<Int>>): IntArray {
        val plantedGardens = IntArray(numberOfGardens)
        for (garden in 0..<numberOfGardens) {
            if (plantedGardens[garden] == NO_FLOWERS) {
                plantedGardens[garden] = getOneAvailableFlowerType(undirctedGraph[garden], plantedGardens)
            }
        }
        return plantedGardens
    }

    private fun createUndirectedGraph(numberOfGardens: Int, paths: Array<IntArray>): List<List<Int>> {
        val graph = ArrayList<ArrayList<Int>>(numberOfGardens)
        for (i in 0..<numberOfGardens) {
            graph.add(ArrayList<Int>())
        }

        for (path in paths) {
            val fristGarden = getZeroBasedIndexFromOneBasedIndex(path[0])
            val secondGarden = getZeroBasedIndexFromOneBasedIndex(path[1])
            graph[fristGarden].add(secondGarden)
            graph[secondGarden].add(fristGarden)
        }
        return graph
    }

    private fun getZeroBasedIndexFromOneBasedIndex(oneBasedIndex: Int): Int {
        return oneBasedIndex - 1
    }

    private fun getOneAvailableFlowerType(neighbourGardens: List<Int>, plantedGardens: IntArray): Int {
        var bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens)
        var flowerType = 0
        while ((bitstamptOfAvailableFlowerTypes and 1) == 0) {
            ++flowerType
            bitstamptOfAvailableFlowerTypes = bitstamptOfAvailableFlowerTypes shr 1
        }
        return flowerType
    }

    private fun getBitstamptOfAvailableFlowerTypes(neighbourGardens: List<Int>, plantedGardens: IntArray): Int {
        var bitstamptOfAvailableFlowerTypes = 0
        for (garden in neighbourGardens) {
            if (plantedGardens[garden] != NO_FLOWERS) {
                bitstamptOfAvailableFlowerTypes = bitstamptOfAvailableFlowerTypes or (1 shl plantedGardens[garden])
            }
        }
        bitstamptOfAvailableFlowerTypes = bitstamptOfAvailableFlowerTypes xor BITSTAMP_ALL_FLOWER_TYPES
        return bitstamptOfAvailableFlowerTypes
    }
}
```
```Go []
package main

import "fmt"

const NO_FLOWERS = 0

var FLOWER_TYPES = [4]int{1, 2, 3, 4}
var BITSTAMP_ALL_FLOWER_TYPES = createBitstampAllFlowerTypes()

func gardenNoAdj(numberOfGardens int, paths [][]int) []int {
    undirectedGraph := createUndirectedGraph(numberOfGardens, paths)
    return createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens, undirectedGraph)
}

func createPlantedGardensWhereAdjacentGardensHaveDifferentFlowers(numberOfGardens int, undirctedGraph [][]int) []int {
    plantedGardens := make([]int, numberOfGardens)
    for garden := 0; garden < numberOfGardens; garden++ {
        if plantedGardens[garden] == NO_FLOWERS {
            plantedGardens[garden] = getOneAvailableFlowerType(undirctedGraph[garden], plantedGardens)
        }
    }
    return plantedGardens
}

func createUndirectedGraph(numberOfGardens int, paths [][]int) [][]int {
    graph := make([][]int, numberOfGardens)
    for i := 0; i < numberOfGardens; i++ {
        graph[i] = []int{}
    }

    for _, path := range paths {
        fristGarden := getZeroBasedIndexFromOneBasedIndex(path[0])
        secondGarden := getZeroBasedIndexFromOneBasedIndex(path[1])
        graph[fristGarden] = append(graph[fristGarden], secondGarden)
        graph[secondGarden] = append(graph[secondGarden], fristGarden)
    }
    return graph
}

func getZeroBasedIndexFromOneBasedIndex(oneBasedIndex int) int {
    return oneBasedIndex - 1
}

func createBitstampAllFlowerTypes() int {
    bitstampAllFlowerTypes := 0
    for _, flowerType := range FLOWER_TYPES {
        bitstampAllFlowerTypes ^= 1 << flowerType
    }
    return bitstampAllFlowerTypes
}

func getOneAvailableFlowerType(neighbourGardens []int, plantedGardens []int) int {
    var bitstamptOfAvailableFlowerTypes = getBitstamptOfAvailableFlowerTypes(neighbourGardens, plantedGardens)
    var flowerType = 0
    for (bitstamptOfAvailableFlowerTypes & 1) == 0 {
        flowerType++
        bitstamptOfAvailableFlowerTypes >>= 1
    }
    return flowerType
}

func getBitstamptOfAvailableFlowerTypes(neighbourGardens []int, plantedGardens []int) int {
    bitstamptOfAvailableFlowerTypes := 0
    for _, garden := range neighbourGardens {
        if plantedGardens[garden] != NO_FLOWERS {
            bitstamptOfAvailableFlowerTypes |= 1 << plantedGardens[garden]
        }
    }
    bitstamptOfAvailableFlowerTypes ^= BITSTAMP_ALL_FLOWER_TYPES
    return bitstamptOfAvailableFlowerTypes
}
```