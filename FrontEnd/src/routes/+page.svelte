<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="FrontEnd App" />
</svelte:head>

<section>
	<main class="min-h-screen flex justify-center items-center p-6" style="background: linear-gradient(135deg, #20B2AA 0%, #4682B4 50%, #9370DB 100%)">
		<div class="w-full max-w-7xl flex flex-col h-screen">
		  <!-- Header Section -->
		  <section>
			<header class="p-6 bg-white/10 backdrop-blur-md rounded-t-xl border border-white/20 shadow-lg">
			  <h1 class="text-2xl font-bold text-white">Product Management</h1>
			  <div class="flex items-center justify-between mt-4">
				<div class="relative w-1/2">
				  <input type="text" placeholder="Search products..." class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" />
				  <svg class="absolute right-3 top-3 h-5 w-5 text-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
				  </svg>
				</div>
				<button class="bg-white text-teal-600 hover:bg-white/90 font-medium py-2 px-4 rounded-lg flex items-center">
				  <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
				  </svg>
				  Add Product
				</button>
			  </div>
			</header>
		  </section>
	  
		  <!-- Main Content Section with Side Panels -->
		  <section class="flex flex-1 overflow-hidden">
			<!-- Left Sidebar -->
			<aside class="w-64 bg-white/10 backdrop-blur-md border-r border-white/20 p-4 hidden md:block">
			  <nav>
				<ul class="space-y-2">
				  <li>
					<a href="#" class="flex items-center px-4 py-2 text-white bg-white/20 rounded-lg">
					  <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
					  </svg>
					  Dashboard
					</a>
				  </li>
				  <li>
					<a href="#" class="flex items-center px-4 py-2 text-white hover:bg-white/20 rounded-lg">
					  <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
					  </svg>
					  Products
					</a>
				  </li>
				  <li>
					<a href="#" class="flex items-center px-4 py-2 text-white hover:bg-white/20 rounded-lg">
					  <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
					  </svg>
					  Customers
					</a>
				  </li>
				  <li>
					<a href="#" class="flex items-center px-4 py-2 text-white hover:bg-white/20 rounded-lg">
					  <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
					  </svg>
					  Orders
					</a>
				  </li>
				</ul>
			  </nav>
			</aside>
	  
			<!-- Main Content -->
			<section class="flex-1 bg-white/10 backdrop-blur-md overflow-auto">
			  <div class="p-6">
				<h2 class="text-xl font-medium mb-4 text-white">Available Products</h2>
				<table class="w-full border-collapse">
				  <thead>
					<tr class="border-b border-white/20">
					  <th class="text-left py-3 px-4 text-white">Product Name</th>
					  <th class="text-left py-3 px-4 text-white">Category</th>
					  <th class="text-left py-3 px-4 text-white">Price</th>
					  <th class="text-left py-3 px-4 text-white">Stock</th>
					  <th class="text-left py-3 px-4 text-white">Actions</th>
					</tr>
				  </thead>
				  <tbody>
					<tr class="border-b border-white/10 hover:bg-white/5">
					  <td class="py-3 px-4 text-white">Wireless Headphones</td>
					  <td class="py-3 px-4 text-white">Electronics</td>
					  <td class="py-3 px-4 text-white">$129.99</td>
					  <td class="py-3 px-4 text-white">24</td>
					  <td class="py-3 px-4 flex space-x-2">
						<button class="p-1 rounded hover:bg-white/10">
						  <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
						  </svg>
						</button>
						<button class="p-1 rounded hover:bg-white/10">
						  <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
						  </svg>
						</button>
					  </td>
					</tr>
					<tr class="border-b border-white/10 hover:bg-white/5">
					  <td class="py-3 px-4 text-white">Smart Watch</td>
					  <td class="py-3 px-4 text-white">Wearables</td>
					  <td class="py-3 px-4 text-white">$199.99</td>
					  <td class="py-3 px-4 text-white">18</td>
					  <td class="py-3 px-4 flex space-x-2">
						<button class="p-1 rounded hover:bg-white/10">
						  <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
						  </svg>
						</button>
						<button class="p-1 rounded hover:bg-white/10">
						  <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
						  </svg>
						</button>
					  </td>
					</tr>
				  </tbody>
				</table>
			  </div>
			</section>
	  
			<!-- Right Sidebar -->
			<aside class="w-64 bg-white/10 backdrop-blur-md border-l border-white/20 p-4 hidden lg:block">
			  <h3 class="text-lg font-medium mb-4 text-white">Product Stats</h3>
			  <div class="space-y-4">
				<div class="bg-white/20 rounded-lg p-4">
				  <h4 class="text-sm font-medium text-white">Total Products</h4>
				  <p class="text-2xl font-bold text-white">24</p>
				</div>
				<div class="bg-white/20 rounded-lg p-4">
				  <h4 class="text-sm font-medium text-white">Low Stock</h4>
				  <p class="text-2xl font-bold text-white">3</p>
				</div>
				<div class="bg-white/20 rounded-lg p-4">
				  <h4 class="text-sm font-medium text-white">Recent Sales</h4>
				  <p class="text-2xl font-bold text-white">128</p>
				</div>
			  </div>
			</aside>
		  </section>
	  
		  <!-- Form Section -->
		  <section class="mt-4">
			<div class="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
			  <h2 class="text-xl font-medium mb-4 text-white">Add New Product</h2>
			  <form>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				  <section>
					<label for="product-name" class="block text-white text-sm font-medium mb-2">Product Name</label>
					<input type="text" id="product-name" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter product name" required/>
				  </section>
				  
				  <section>
					<label for="category" class="block text-white text-sm font-medium mb-2">Category</label>
					<select id="category" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" required>
					  <option value="" disabled selected>Select category</option>
					  <option value="electronics">Electronics</option>
					  <option value="wearables">Wearables</option>
					  <option value="accessories">Accessories</option>
					</select>
				  </section>
				  
				  <section>
					<label for="price" class="block text-white text-sm font-medium mb-2">Price</label>
					<input type="number" id="price" step="0.01" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="0.00" required/>
				  </section>
				  
				  <section>
					<label for="stock" class="block text-white text-sm font-medium mb-2">Stock</label>
					<input type="number" id="stock" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="0" required/>
				  </section>
				</div>
				
				<section class="mt-6">
				  <label for="description" class="block text-white text-sm font-medium mb-2">Description</label>
				  <textarea id="description" rows="4" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter product description"></textarea>
				</section>
				
				<section class="mt-6 flex justify-end">
				  <button type="button" class="mr-4 py-2 px-4 border border-white/20 rounded-lg text-white hover:bg-white/10">Cancel</button>
				  <button type="submit" class="bg-white text-teal-600 hover:bg-white/90 font-medium py-2 px-6 rounded-lg">Save Product</button>
				</section>
			  </form>
			</div>
		  </section>
		</div>
	  </main>
</section>
