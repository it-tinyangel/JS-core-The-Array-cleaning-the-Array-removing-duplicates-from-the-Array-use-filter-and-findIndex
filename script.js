// Function to remove duplicate elements from an array.
function removeDuplicates(arr) {
	return arr.filter((item, index, array) => {
		const lowerCaseItem = item.toLowerCase();

		return array.findIndex((element) => element.toLowerCase() === lowerCaseItem) === index;
	});
}

// Example of using the function.
const arr1 = ['html', 'css', 'html', 'js'];
const arr2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'];
const arr3 = ['html', 'css', 'html', 'HTML', 'js']; // Added an uppercase duplicate.
const cleanArr1 = removeDuplicates(arr1);
const cleanArr2 = removeDuplicates(arr2);
const cleanArr3 = removeDuplicates(arr3);

// Outputing the result to the console.
console.log(`Clean Array arr1:`, cleanArr1);
console.log(`Clean Array arr2:`, cleanArr2);
console.log(`Clean Array arr3:`, cleanArr3);
