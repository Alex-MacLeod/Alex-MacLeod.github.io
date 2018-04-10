import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WordListsService implements InMemoryDbService {
  createDb() {
    const wordlists = [
                        {
                            'theme': 'Anime',
                            'words': [
                                'manga',
                                'isekai',
                                'tsundere'
                            ]
                        },
                        {
                            'theme': 'Football',
                            'words': [
                                'goal',
                                'defender',
                                'offside'
                            ]
                        },
                        {
                            'theme': 'Singapore',
                            'words': [
                                'hawker',
                                'singlish',
                                'majulah'
                            ]
                        },
                        {
                            'theme': 'Software Development',
                            'words': [
                                'javascript',
                                'coffee',
                                'overtime'
                            ]
                        },
                        {
                            'theme': 'UK Politics',
                            'words': [
                                'parliament',
                                'minister',
                                'cabinet'
                            ]
                        }
                    ];
    return {wordlists};
  }
}
