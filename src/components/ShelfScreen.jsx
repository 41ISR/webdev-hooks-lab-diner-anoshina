import { BookList } from "./BookList"
import { FilterChip } from "./FilterChip"



export const ShelfScreen = () => {
    return (
        <section className="screen active" id="screen-shelf">
            <p className="greeting">Добрый вечер</p>
            <div className="add-book-row">
                <input className="input" id="bookInput" placeholder="Название книги..." />
                <button className="btn" id="addBtn">
                    Добавить на полку
                </button>
            </div>
            <div className="list-toolbar">
                <span className="toolbar-title">Книги</span>
                <FilterChip />
            </div>
            <BookList />

        </section>
    )
}