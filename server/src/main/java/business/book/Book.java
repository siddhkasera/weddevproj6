package business.book;

/*
 * TODO: Create a record constructor with fields corresponding to the fields in the
 * book table of your database.
 */
//DO WE NEED TO ADD ALL THE FIELDS FROM THE TABLE HERE?
public record Book(long bookId, String title, String author, String description,
				   long price, long rating,
				   boolean isPublic, boolean isFeatured, long categoryId) {}
