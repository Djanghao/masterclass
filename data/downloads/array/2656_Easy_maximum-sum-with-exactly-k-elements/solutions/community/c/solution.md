# Assembly with explanation and comparison with C

**Author:** pcardenasb
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5309415/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/5309415/)

---


# Rationale

I've solved this LeetCode problem using inline assembly in C. My goal isn't to showcase complexity, but rather to challenge myself and deepen my understanding of assembly language. 

As a beginner in assembly, I welcome any improvements or comments on my code.

Additionally, I aim to share insights on practicing assembly on LeetCode.

# Intuition

Compute the maximum value of the array. Then return `k*max + ((k-1)*k)/2`.


# Approach

Calculate the maximum value of the array in `CX`, then set `AX` to `k*max + ((k-1)*k)/2`. View [code](#assembly-code) comments for explanation.


# Complexity
- Time complexity: $$O(\	ext{numsSize})$$, because It will execute the code in `.loop` for every element in `nums`. Moreover, $$\	ext{numsSize} \\le 100$$.
- Space complexity: $$O(1)$$, No memory variable is needed, only registers.

# Assembly Code
This mixed block shows the C code with inline assembly and the assembly code.  View [Notes about assembly](#notes-about-assembly) for notes about the syntax used. Moreover, It shows the assembly code without comment for [comparision with C](#comparison-with-c). If you want to test this code you can [run locally](#run-locally).

```c [C (inline asm)]
int maximizeSum(int* nums, int numsSize, int k){
	int ret;
	__asm__(
".intel_syntax noprefix\
"
"	## rdi: nums\
"
"	## esi = sil: numsSize\
"
"	## edx = dl: k\
"
"\
"
"	## Calculate the maximum value of the array in CX\
"
"	xor r8b, r8b		# R8 will store the maximum\
"
"	xor rcx, rcx		# CX is the loop counter\
"
".loop:\
"
"	mov r9b, BYTE PTR [rdi+rcx*4] # extract the current value of nums to R9b\
"
"	cmp r8b, r9b		      # Compare current with maximum\
"
"	cmovb r8w, r9w		      # Assign maximum (R8) to current (R9) if maximum is below current\
"
"	inc cl			      # increment counter (CX)\
"
"	cmp cl, sil		      # Compare counter (CX) and numsSize (SI)\
"
"	jl .loop		      # Jump back to .loop if counter (CX) is less than numsSize (SI)\
"
"	## At this point, CX is the maximum value of the array (max)\
"
"	\
"
"	## Set AX to k*max + (k-1)*k/2\
"
"	movzx ax, dl		# Set AX to k (DX)\
"
"	mul r8b			# Multiply AL by the maximum (R8). Then AX = k*max\
"
"\
"
"	mov cx, ax		# Set CX to AX = k*max\
"
"\
"
"	movzx eax, dl		# Set AX to k (DX) zero-extending the upper bits.\
"
"	dec al			# Decrease AX by 1. Then AX = k-1\
"
"	mul dl			# Multiply by k (DL). Then AX = (k-1)*k\
"
"	shr ax			# Shift AX one bit. Then AX = (k-1)*k/2\
"
"\
"
"	add ax, cx		# Add CX = k*max to AX. Then AX = k*max + (k-1)*k/2\
"
".att_syntax\
"
		: "=a"(ret)
	);
	return ret;
}
```
```assembly [ASM (with comments)]
	.intel_syntax noprefix
	.global maximizeSum

maximizeSum:
	## rdi: nums
	## esi = sil: numsSize
	## edx = dl: k

	## Calculate the maximum value of the array in CX
	xor r8b, r8b		# R8 will store the maximum
	xor rcx, rcx		# CX is the loop counter
.loop:
	mov r9b, BYTE PTR [rdi+rcx*4] # extract the current value of nums to R9b
	cmp r8b, r9b		      # Compare current with maximum
	cmovb r8w, r9w		      # Assign maximum (R8) to current (R9) if maximum is below current
	inc cl			      # increment counter (CX)
	cmp cl, sil		      # Compare counter (CX) and numsSize (SI)
	jl .loop		      # Jump back to .loop if counter (CX) is less than numsSize (SI)
	## At this point, CX is the maximum value of the array (max)
	
	## Set AX to k*max + (k-1)*k/2
	movzx ax, dl		# Set AX to k (DX)
	mul r8b			# Multiply AL by the maximum (R8). Then AX = k*max

	mov cx, ax		# Set CX to AX = k*max

	movzx eax, dl		# Set AX to k (DX) zero-extending the upper bits.
	dec al			# Decrease AX by 1. Then AX = k-1
	mul dl			# Multiply by k (DL). Then AX = (k-1)*k
	shr ax			# Shift AX one bit. Then AX = (k-1)*k/2

	add ax, cx		# Add CX = k*max to AX. Then AX = k*max + (k-1)*k/2
	ret
```
```assembly [ASM (without comments)]
	.intel_syntax noprefix
	.global maximizeSum

maximizeSum:





	xor r8b, r8b
	xor rcx, rcx
.loop:
	mov r9b, BYTE PTR [rdi+rcx*4]
	cmp r8b, r9b
	cmovb r8w, r9w
	inc cl
	cmp cl, sil
	jl .loop

	

	movzx ax, dl
	mul r8b

	mov cx, ax

	movzx eax, dl
	dec al
	mul dl
	shr ax

	add ax, cx
	ret
```
```assembly [ASM (without comments)]
	.intel_syntax noprefix
	.global maximizeSum
maximizeSum:
	xor r8b, r8b
	xor rcx, rcx
.loop:
	mov r9b, BYTE PTR [rdi+rcx*4]
	cmp r8b, r9b
	cmovb r8w, r9w
	inc cl
	cmp cl, sil
	jl .loop
	movzx ax, dl
	mul r8b
	mov cx, ax
	movzx eax, dl
	dec al
	mul dl
	shr ax
	add ax, cx
	ret
```

# Notes about assembly

- This code is written Intel syntax using the `.intel_syntax noprefix` directive.
- This code uses `#` for comments because GAS (GNU Assembler) uses this syntax and Leetcode uses GCC for compiling.
- The reason I return from the "function" by jumping to the `.epilog` is that it's easier to remove everything after the `.epilog` to obtain the C code with inline assembly. I am aware that in assembly I can have multiple ret instructions in my "function", but in inline assembly I need to replace those `ret` instructions with a jump to the end of the inline assembly block.

# Comparison with C

This my solution using C and the assembly code generated by `gcc -S`. I removed unnecesary lines with the following shell command. I also generated the code with optimization level `-O0`, `-O1`, `-O2`, `-Os`, `-Oz` for comparison.

```bash
$ gcc -O2 -fno-asynchronous-unwind-tables -masm=intel -S code.c -o- | 
    sed '/^\\(.LCOLD\\|.LHOT\\|\\s*\\(\\.file\\|\\.type\\|\\.text\\|\\.p2align\\|\\.size\\|\\.ident\\|\\.section\\)\\)/d'
```

Note that the C code may use `restrict`s, `const`s and type castings in order to get optimized code. Moreover, after the generated assembly code, I have also included my solution using assembly without comments for comparison.

```C [-C code]
int maximizeSum(const int* restrict nums, const int numsSize, const int k){
	unsigned char max = 0;
	for (unsigned char i = 0; i < numsSize; i++) {
		if (max < (unsigned char) nums[i]) {
			max = (unsigned char) nums[i];
		}
	}
	return (unsigned short)k * (unsigned short)max + (unsigned short) ((unsigned short)k * (((unsigned short)k) - ((unsigned short)1))) / 2;
}
```
```assembly [-gcc -O0]
	.intel_syntax noprefix
	.globl	maximizeSum
maximizeSum:
	push	rbp
	mov	rbp, rsp
	mov	QWORD PTR -24[rbp], rdi
	mov	DWORD PTR -28[rbp], esi
	mov	DWORD PTR -32[rbp], edx
	mov	BYTE PTR -2[rbp], 0
	mov	BYTE PTR -1[rbp], 0
	jmp	.L2
.L4:
	movzx	eax, BYTE PTR -1[rbp]
	lea	rdx, 0[0+rax*4]
	mov	rax, QWORD PTR -24[rbp]
	add	rax, rdx
	mov	eax, DWORD PTR [rax]
	cmp	BYTE PTR -2[rbp], al
	jnb	.L3
	movzx	eax, BYTE PTR -1[rbp]
	lea	rdx, 0[0+rax*4]
	mov	rax, QWORD PTR -24[rbp]
	add	rax, rdx
	mov	eax, DWORD PTR [rax]
	mov	BYTE PTR -2[rbp], al
.L3:
	movzx	eax, BYTE PTR -1[rbp]
	add	eax, 1
	mov	BYTE PTR -1[rbp], al
.L2:
	movzx	eax, BYTE PTR -1[rbp]
	cmp	DWORD PTR -28[rbp], eax
	jg	.L4
	mov	eax, DWORD PTR -32[rbp]
	movzx	edx, ax
	movzx	eax, BYTE PTR -2[rbp]
	imul	edx, eax
	mov	eax, DWORD PTR -32[rbp]
	mov	ecx, eax
	mov	eax, DWORD PTR -32[rbp]
	sub	eax, 1
	imul	eax, ecx
	shr	ax
	movzx	eax, ax
	add	eax, edx
	pop	rbp
	ret
```
```assembly [-gcc -O1]
	.intel_syntax noprefix
	.globl	maximizeSum
maximizeSum:
	test	esi, esi
	jle	.L4
	mov	eax, 0
	mov	ecx, 0
.L3:
	movzx	r8d, al
	movzx	r8d, BYTE PTR [rdi+r8*4]
	cmp	cl, r8b
	cmovb	ecx, r8d
	add	eax, 1
	movzx	r8d, al
	cmp	r8d, esi
	jl	.L3
.L2:
	lea	eax, -1[rdx]
	imul	eax, edx
	shr	ax
	movzx	eax, ax
	movzx	edx, dx
	movzx	ecx, cl
	imul	edx, ecx
	add	eax, edx
	ret
.L4:
	mov	ecx, 0
	jmp	.L2
```
```assembly [-gcc -O2]
	.intel_syntax noprefix
	.globl	maximizeSum
maximizeSum:
	movzx	r9d, dx
	test	esi, esi
	jle	.L4
	xor	eax, eax
	xor	ecx, ecx
.L3:
	movzx	r8d, al
	movzx	r8d, BYTE PTR [rdi+r8*4]
	cmp	cl, r8b
	cmovb	ecx, r8d
	add	eax, 1
	movzx	r8d, al
	cmp	r8d, esi
	jl	.L3
	imul	ecx, r9d
	lea	eax, -1[rdx]
	imul	eax, edx
	shr	ax
	movzx	eax, ax
	add	eax, ecx
	ret
.L4:
	lea	eax, -1[rdx]
	xor	ecx, ecx
	imul	eax, edx
	shr	ax
	movzx	eax, ax
	add	eax, ecx
	ret
```
```assembly [-gcc -Os]
	.intel_syntax noprefix
	.globl	maximizeSum
maximizeSum:
	xor	eax, eax
	xor	ecx, ecx
.L2:
	movzx	r8d, al
	cmp	r8d, esi
	jge	.L5
	movzx	r8d, al
	movzx	r8d, BYTE PTR [rdi+r8*4]
	cmp	cl, r8b
	cmovb	ecx, r8d
	inc	eax
	jmp	.L2
.L5:
	lea	eax, -1[rdx]
	imul	eax, edx
	movzx	edx, dx
	imul	edx, ecx
	shr	ax
	movzx	eax, ax
	add	eax, edx
	ret
```
```assembly [-gcc -Oz]
	.intel_syntax noprefix
	.globl	maximizeSum
maximizeSum:
	xor	eax, eax
	xor	ecx, ecx
.L2:
	movzx	r8d, al
	cmp	r8d, esi
	jge	.L5
	movzx	r8d, al
	movzx	r8d, BYTE PTR [rdi+r8*4]
	cmp	cl, r8b
	cmovb	ecx, r8d
	inc	eax
	jmp	.L2
.L5:
	lea	eax, -1[rdx]
	imul	eax, edx
	movzx	edx, dx
	imul	edx, ecx
	shr	ax
	movzx	eax, ax
	add	eax, edx
	ret
```
```assembly [-my ASM]
	.intel_syntax noprefix
	.global maximizeSum
maximizeSum:
	xor r8b, r8b
	xor rcx, rcx
.loop:
	mov r9b, BYTE PTR [rdi+rcx*4]
	cmp r8b, r9b
	cmovb r8w, r9w
	inc cl
	cmp cl, sil
	jl .loop
	movzx ax, dl
	mul r8b
	mov cx, ax
	movzx eax, dl
	dec al
	mul dl
	shr ax
	add ax, cx
	ret
```


# Run locally

Compile locally the assembly code with GAS or the inline assembly with GCC.

```bash
$ as -o code.o assembly_code.s
$ # or
$ gcc -c -o code.o c_with_inline_assembly_code.c 
```

Then, create a `main.c` file with the function prototype. Here you can include your tests.

```c
/* main.c */

int maximizeSum(int* nums, int numsSize, int k);

int main(int argc, const char *argv[]) {
    // Use maximizeSum function
    return 0;
}
```

Then, compile `main.c` and link to create the executable

```bash
$ gcc main.c code.o -o main
```

Finally, execute

```bash
$ ./main
```

