import { all } from 'axios';
import { reactive } from 'vue';

export const store = reactive(
    {
        charactersList: [],
        loading: true,
        CardArchetype:[],
        search:''
    }
);