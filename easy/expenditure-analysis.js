/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = new Map();

  // Loop through each transaction
  transactions.forEach((transaction) => {
    // Check if transaction has a valid category
    if (transaction && transaction.category) {
      const category = transaction.category;

      if (categoryTotals.has(category)) {
        categoryTotals.set(category, categoryTotals.get(category) + transaction.price);
      } else {
        categoryTotals.set(category, transaction.price);
      }
    }
  });
  // convert map entries to an array of objects
  const result = Array.from(categoryTotals.entries()).map(([category, total]) => ({ 
    category, 
    totalSpent: total, 
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
