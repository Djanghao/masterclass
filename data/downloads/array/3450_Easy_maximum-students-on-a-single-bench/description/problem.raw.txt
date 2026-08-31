<p data-pm-slice="1 1 []">You are given a 2D integer array of student data <code>students</code>, where <code>students[i] = [student_id, bench_id]</code> represents that student <code>student_id</code> is sitting on the bench <code>bench_id</code>.</p>

<p>Return the <strong>maximum</strong> number of <em>unique</em> students sitting on any single bench. If no students are present, return 0.</p>

<p><strong>Note</strong>: A student can appear multiple times on the same bench in the input, but they should be counted only once per bench.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">students = [[1,2],[2,2],[3,3],[1,3],[2,3]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Bench 2 has two unique students: <code>[1, 2]</code>.</li>
	<li>Bench 3 has three unique students: <code>[1, 2, 3]</code>.</li>
	<li>The maximum number of unique students on a single bench is 3.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">students = [[1,1],[2,1],[3,1],[4,2],[5,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Bench 1 has three unique students: <code>[1, 2, 3]</code>.</li>
	<li>Bench 2 has two unique students: <code>[4, 5]</code>.</li>
	<li>The maximum number of unique students on a single bench is 3.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">students = [[1,1],[1,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The maximum number of unique students on a single bench is 1.</li>
</ul>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">students = []</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>Since no students are present, the output is 0.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= students.length &lt;= 100</code></li>
	<li><code>students[i] = [student_id, bench_id]</code></li>
	<li><code>1 &lt;= student_id &lt;= 100</code></li>
	<li><code>1 &lt;= bench_id &lt;= 100</code></li>
</ul>
