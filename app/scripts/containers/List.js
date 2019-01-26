import { connect } from 'react-redux';
import { List } from 'components/List';
import { getListItems } from 'selectors/list';
import { setActiveListItem } from 'store/list/set-active-list-item';
import { toggleAdvancedSearch } from 'store/list/toggle-advanced-search';
import { setAdvancedSearchOption } from 'store/list/set-advanced-search-option';
import { setListSearch } from 'store/list/set-list-search';

const mapStateToProps = state => {
    return {
        locale: state.locale,
        search: state.list.search,
        active: state.list.active,
        advanced: state.list.advanced,
        advancedEnabled: state.list.advancedEnabled,
        items: getListItems(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onItemClick({ item }) {
            dispatch(setActiveListItem(item.id));
        },
        onSearchChange({ value }) {
            dispatch(setListSearch(value));
        },
        onAdvancedSearchClick() {
            dispatch(toggleAdvancedSearch());
        },
        onAdvancedOptionChange({ option, value }) {
            dispatch(setAdvancedSearchOption(option, value));
        },
    };
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export { ListContainer as List };
