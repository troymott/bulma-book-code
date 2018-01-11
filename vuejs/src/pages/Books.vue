<template>
<div>
	<h1 class="title ">Books</h1>

	<nav class="level">
		<div class="level-left">
			<div class="level-item">
				<p class="subtitle is-5">
					<strong>5</strong> books
				</p>
			</div>
			<p class="level-item">
				<a class="button is-success" @click="showNewModal = true">New</a>
			</p>
			<div class="level-item is-hidden-tablet-only">
				<form>
					<div class="field has-addons">
						<p class="control">
							<input class="input" type="text" placeholder="Book name, ISBN…" v-model="searchWord" v-on:keyup="searchBooks">
						</p>
						<p class="control">
							<button class="button" @click="searchBooks">Search</button>
						</p>
					</div>
				</form>
			</div>
		</div>

		<div class="level-right">
			<div class="level-item">Order by</div>
			<div class="level-item">
				<div class="select">
					<select @change="sortBooks">
						<option value="publishDate">Publish date</option>
						<option value="price">Price</option>
						<option value="pageCount">Page count</option>
					</select>
				</div>
			</div>
		</div>
	</nav>

	<div class="columns is-multiline">
        <template v-for="(book, index) in books">
		<div class="column is-12-tablet is-6-desktop is-4-widescreen"
            :key="book.ISBN">
			<article class="box">
				<div class="media">
					<aside class="media-left">
						<img :src="book.coverImage" width="80">
					</aside>
					<div class="media-content">
						<p class="title is-5 is-spaced is-marginless">
							<a @click="showEditModal = true">{{ book.title }}</a>
						</p>
						<p class="subtitle is-marginless">
							{{ book.price }}
						</p>
						<div class="content is-small">
							{{ book.pageCount }} pages
							<br> ISBN: {{ book.ISBN }}
							<br>
							<a @click="editBook(book)">Edit</a>
							<span>·</span>
							<a @click="removeBook(index)">Delete</a>
							</p>
						</div>
					</div>
				</div>
			</article>
		</div>
        </template>
	</div>

  <div class="modal" :class="{'is-active': showNewModal}">
    <div class="modal-background" @click="resetNewBookForm"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Book</p>
        <button class="delete" aria-label="close" @click="resetNewBookForm"></button>
      </header>
      <section class="modal-card-body">
        <form>
              <div class="field">
                <div class="field">
                  <label class="label">Title</label>
                  <div class="control">
                    <input class="input is-large" type="text" value="" placeholder="e.g. Designing with Bulma" required v-model="book.title">
                  </div>
                </div>
              </div>

              <div class="columns is-desktop">
                <div class="column">
                  <label class="label">Price</label>
                  <div class="control has-icons-left">
                    <input class="input" type="number" placeholder="e.g. 22.99" value="" required v-model="book.price">
                    <span class="icon is-small is-left">
                      <i class="fa fa-dollar"></i>
                    </span>
                  </div>
                </div>

                <div class="column">
                  <label class="label">Pages</label>
                  <div class="control">
                    <input class="input" type="number" placeholder="e.g. 270" value="" required v-model="book.pageCount">
                  </div>
                </div>

                <div class="column">
                  <label class="label">ISBN</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="e.g. 9781939902351" value="" required v-model="book.ISBN">
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Cover image</label>
                <div class="control">
                  <div class="file has-name">
                    <label class="file-label">
                      <input class="file-input" type="file">
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fa fa-upload"></i>
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                      <span class="file-name">
                        No file chosen
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" type="button" @click="saveBook">Save Book</button>
        <button class="button" type="cancel" @click="resetNewBookForm">Cancel</button>
      </footer>
    </div>
  </div>
</div>
</template>
<script>
import Collect from "collect.js";

export default {
  name: "Books",
  data() {
    return {
      books: [
        {
          title: "TensorFlow For Machine Intelligence",
          price: "$22.99",
          pageCount: 270,
          ISBN: "9781939902351",
          coverImage: "src/assets/images/tensorflow.jpg",
          publishDate: 2017,
        },
        {
          title: "Docker in Production",
          price: "$22.99",
          pageCount: 156,
          ISBN: "9781939902184",
          coverImage: "src/assets/images/docker.jpg",
          publishDate: 2015,
        },
        {
          title: "Learning Swift",
          price: "$24.99",
          pageCount: 342,
          ISBN: "9781939902115",
          coverImage: "src/assets/images/swift.jpg",
          publishDate: 2015,
        },
        {
          title: "Choosing a JavaScript Framework",
          price: "$19.99",
          pageCount: 270,
          ISBN: "9781939902092",
          coverImage: "src/assets/images/js-framework.jpg",
          publishDate: 2016,
        },
        {
          title: "Developing a Gulp.js Edge",
          price: "$15.99",
          pageCount: 134,
          ISBN: "9781939902146",
          coverImage: "src/assets/images/gulp.jpg",
          publishDate: 2014,
        },
      ],
      allBooks: [
        {
          title: "TensorFlow For Machine Intelligence",
          price: "$22.99",
          pageCount: 270,
          ISBN: "9781939902351",
          coverImage: "src/assets/images/tensorflow.jpg",
          publishDate: 2017,
        },
        {
          title: "Docker in Production",
          price: "$22.99",
          pageCount: 156,
          ISBN: "9781939902184",
          coverImage: "src/assets/images/docker.jpg",
          publishDate: 2015,
        },
        {
          title: "Learning Swift",
          price: "$22.99",
          pageCount: 342,
          ISBN: "9781939902115",
          coverImage: "src/assets/images/swift.jpg",
          publishDate: 2015,
        },
        {
          title: "Choosing a JavaScript Framework",
          price: "$19.99",
          pageCount: 270,
          ISBN: "9781939902092",
          coverImage: "src/assets/images/js-framework.jpg",
          publishDate: 2016,
        },
        {
          title: "Developing a Gulp.js Edge",
          price: "$22.99",
          pageCount: 134,
          ISBN: "9781939902146",
          coverImage: "src/assets/images/gulp.jpg",
          publishDate: 2014,
        },
      ],
      book: {},
      showNewModal: false,
      showEditModal: false,
      searchWord: "",
    };
  },
  methods: {
    searchBooks() {
      if (!this.searchWord) {
        this.books = Object.assign([], this.allBooks);
      } else {

        this.books = this.books.filter((book) => {
          return book.name.toLowerCase().includes(this.searchWord.toLowerCase());
        });
      }
    },
    sortBooks(event) {
      let selectValue = String(event.target.value);

      let collection = Collect(this.books);
      let sortedBooks = collection.sortBy(selectValue);

      this.books = Object.assign([], sortedBooks.all());
    },
    saveBook() {
      this.book.publishDate = "2017";
      this.book.coverImage = "src/assets/images/newbook.jpg";

      this.allBooks.push(this.book);
      this.books.push(this.book);

      this.resetNewBookForm();
    },
    editBook(book) {
      this.showEditModal = true;
      /** 
       * ToDo
       * 
       * - Create an showEditModal
       * - Edit book (incoming parameter.)
       * - Save data 
       * - Close Modal 
      **/
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
    resetNewBookForm(){
      this.book = {};
      this.showNewModal = false;
    }
  },
};

</script>
<style>

</style>
