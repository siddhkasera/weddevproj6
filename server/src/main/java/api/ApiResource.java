package api;

import business.ApplicationContext;
import business.category.Category;
import business.category.CategoryDao;
import business.book.Book;
import business.book.BookDao;

import jakarta.servlet.http.HttpServletRequest;
//import jakarta.javax.ws.rs.*;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

//import javax.ws.rs.ApplicationPath;
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;
import java.util.List;

@ApplicationPath("/")
@Path("/")
public class ApiResource {

    private final BookDao bookDao = ApplicationContext.INSTANCE.getBookDao();
    private final CategoryDao categoryDao = ApplicationContext.INSTANCE.getCategoryDao();
//gives an arraylist of categories.
    @GET
    @Path("categories")
    @Produces(MediaType.APPLICATION_JSON) //json representation of arraylist
    public List<Category> categories(@Context HttpServletRequest httpRequest) {
        try {
            return categoryDao.findAll();
        } catch (Exception e) {
            throw new ApiException("categories lookup failed", e);
        }
    }

    @GET
    @Path("categories/{category-id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Category categoryById(@PathParam("category-id") long categoryId,
                                 @Context HttpServletRequest httpRequest) {
        try {
            Category result = categoryDao.findByCategoryId(categoryId);
            if (result == null) {
                throw new ApiException(String.format("No such category id: %d", categoryId));
            }
            return result;
        } catch (Exception e) {
            throw new ApiException(String.format("Category lookup by category-id %d failed", categoryId), e);
        }
    }

    @GET
    @Path("books/{book-id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book bookById(@PathParam("book-id") long bookId,
                         @Context HttpServletRequest httpRequest) {
        try {
            Book result = bookDao.findByBookId(bookId);
            if (result == null) {
                throw new ApiException(String.format("No such book id: %d", bookId));
            }
            return result;
        } catch (Exception e) {
            throw new ApiException(String.format("Book lookup by book-id %d failed", bookId), e);
        }
    }

    @GET
    @Path("categories/{category-id}/books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> booksByCategoryId(@PathParam("category-id") long categoryId,
                                        @Context HttpServletRequest httpRequest) {
        try {
            Category category = categoryDao.findByCategoryId(categoryId);
            if (category == null) {
                throw new ApiException(String.format("No such category id: %d", categoryId));
            }
            return bookDao.findByCategoryId(category.categoryId());
        } catch (Exception e) {
            throw new ApiException(String.format("Books lookup by category-id %d failed", categoryId), e);
        }
    }

    @GET
    @Path("categories/{category-id}/suggested-books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> suggestedBooks(@PathParam("category-id") long categoryId,
                                     @QueryParam("limit") @DefaultValue("3") int limit,
                                     @Context HttpServletRequest request) {
        try {
            return bookDao.findRandomByCategoryId(categoryId, limit);
        } catch (Exception e) {
            throw new ApiException("products lookup via categoryName failed", e);
        }
    }

    // TODO Implement the following APIs
    // categories/name/{category-name} //return categories by name
    @GET
    @Path("categories/name/{category-name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Category categoryByName(@PathParam("category-name") String categoryName,
                                 @Context HttpServletRequest httpRequest) {
        try {
            Category result = categoryDao.findByName(categoryName);
            if (result == null) {
                throw new ApiException(String.format("No such category name: %s", categoryName));
            }
            return result;
        } catch (Exception e) {
            throw new ApiException(String.format("Category lookup by category-name %s failed", categoryName), e);
        }
    }
    // categories/name/{category-name}/books
    @GET
    @Path("categories/name/{category-name}/books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> byCategoryName(@PathParam("category-name") String categoryName,
                                   @Context HttpServletRequest httpRequest) {

        try {
            Category category = categoryDao.findByName(categoryName);
            if(category == null){
                throw new ApiException(String.format("No such category name: %s", categoryName));
            }
            return bookDao.findByCategoryId(category.categoryId());

        }catch (Exception e){
            throw new ApiException(String.format("Books lookup by category-name %s failed", categoryName),e);
        }
    }

    // categories/name/{category-name}/suggested-books
    @GET
    @Path("categories/name/{category-name}/suggested-books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> suggestedBooksByCategoryName(@PathParam("category-name") String categoryName,
                                     @QueryParam("limit") @DefaultValue("3") int limit,
                                     @Context HttpServletRequest httpRequest) {
        try {
            Category category = categoryDao.findByName(categoryName);
            if(category == null){
                throw new ApiException(String.format("No such category name: %s", categoryName));
            }
            return bookDao.findRandomByCategoryId(category.categoryId(), limit);

        }catch (Exception e){
            throw new ApiException(String.format("Books lookup by category-name %s failed", categoryName),e);
        }
    }
    // categories/name/{category-name}/suggested-books?limit=#

}
