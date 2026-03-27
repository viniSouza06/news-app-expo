import { FlatList } from 'react-native';
import NewsItem from './NewsItem';
import React from 'react';
import { NewsData } from '../utils/handle-api';

export function NewsList({ newsList }: { newsList: NewsData[] }) {
    return (
        <FlatList
            data={newsList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <NewsItem
                    title={item.title}
                    image={item.image}
                    published={item.published}
                    link={item.link}
                />
            )}
        />
    );
}


