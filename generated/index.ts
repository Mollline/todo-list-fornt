// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateNoteInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type EditNoteInput = {
  completed: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  editNote?: Maybe<Note>;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditNoteArgs = {
  input: EditNoteInput;
};

export type Note = {
  __typename?: 'Note';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllNotes?: Maybe<Array<Maybe<Note>>>;
};

export type GetAllNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNotesQuery = { __typename?: 'Query', getAllNotes?: Array<{ __typename?: 'Note', completed: boolean, createdAt: string, title: string, id: string } | null> | null };

export type CreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote?: { __typename?: 'Note', id: string, title: string, completed: boolean, createdAt: string } | null };

export type DeleteNoteMutationVariables = Exact<{
  deleteNoteId: Scalars['ID']['input'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', deleteNote?: { __typename?: 'Note', id: string, title: string, completed: boolean, createdAt: string } | null };

export type EditNoteMutationVariables = Exact<{
  input: EditNoteInput;
}>;


export type EditNoteMutation = { __typename?: 'Mutation', editNote?: { __typename?: 'Note', id: string, title: string, completed: boolean, createdAt: string } | null };


export const GetAllNotesDocument = gql`
    query GetAllNotes {
  getAllNotes {
    completed
    createdAt
    title
    id
  }
}
    `;
export type GetAllNotesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllNotesQuery, GetAllNotesQueryVariables>
    } & TChildProps;
export function withGetAllNotes<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllNotesQuery,
  GetAllNotesQueryVariables,
  GetAllNotesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllNotesQuery, GetAllNotesQueryVariables, GetAllNotesProps<TChildProps, TDataName>>(GetAllNotesDocument, {
      alias: 'getAllNotes',
      ...operationOptions
    });
};

/**
 * __useGetAllNotesQuery__
 *
 * To run a query within a React component, call `useGetAllNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllNotesQuery, GetAllNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNotesQuery, GetAllNotesQueryVariables>(GetAllNotesDocument, options);
      }
export function useGetAllNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNotesQuery, GetAllNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNotesQuery, GetAllNotesQueryVariables>(GetAllNotesDocument, options);
        }
export function useGetAllNotesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllNotesQuery, GetAllNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNotesQuery, GetAllNotesQueryVariables>(GetAllNotesDocument, options);
        }
export type GetAllNotesQueryHookResult = ReturnType<typeof useGetAllNotesQuery>;
export type GetAllNotesLazyQueryHookResult = ReturnType<typeof useGetAllNotesLazyQuery>;
export type GetAllNotesSuspenseQueryHookResult = ReturnType<typeof useGetAllNotesSuspenseQuery>;
export type GetAllNotesQueryResult = Apollo.QueryResult<GetAllNotesQuery, GetAllNotesQueryVariables>;
export const CreateNoteDocument = gql`
    mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    id
    title
    completed
    createdAt
  }
}
    `;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;
export type CreateNoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>
    } & TChildProps;
export function withCreateNote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateNoteMutation,
  CreateNoteMutationVariables,
  CreateNoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateNoteMutation, CreateNoteMutationVariables, CreateNoteProps<TChildProps, TDataName>>(CreateNoteDocument, {
      alias: 'createNote',
      ...operationOptions
    });
};

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation DeleteNote($deleteNoteId: ID!) {
  deleteNote(id: $deleteNoteId) {
    id
    title
    completed
    createdAt
  }
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;
export type DeleteNoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>
    } & TChildProps;
export function withDeleteNote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteNoteMutation,
  DeleteNoteMutationVariables,
  DeleteNoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteNoteMutation, DeleteNoteMutationVariables, DeleteNoteProps<TChildProps, TDataName>>(DeleteNoteDocument, {
      alias: 'deleteNote',
      ...operationOptions
    });
};

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      deleteNoteId: // value for 'deleteNoteId'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const EditNoteDocument = gql`
    mutation EditNote($input: EditNoteInput!) {
  editNote(input: $input) {
    id
    title
    completed
    createdAt
  }
}
    `;
export type EditNoteMutationFn = Apollo.MutationFunction<EditNoteMutation, EditNoteMutationVariables>;
export type EditNoteProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditNoteMutation, EditNoteMutationVariables>
    } & TChildProps;
export function withEditNote<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditNoteMutation,
  EditNoteMutationVariables,
  EditNoteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditNoteMutation, EditNoteMutationVariables, EditNoteProps<TChildProps, TDataName>>(EditNoteDocument, {
      alias: 'editNote',
      ...operationOptions
    });
};

/**
 * __useEditNoteMutation__
 *
 * To run a mutation, you first call `useEditNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editNoteMutation, { data, loading, error }] = useEditNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditNoteMutation(baseOptions?: Apollo.MutationHookOptions<EditNoteMutation, EditNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditNoteMutation, EditNoteMutationVariables>(EditNoteDocument, options);
      }
export type EditNoteMutationHookResult = ReturnType<typeof useEditNoteMutation>;
export type EditNoteMutationResult = Apollo.MutationResult<EditNoteMutation>;
export type EditNoteMutationOptions = Apollo.BaseMutationOptions<EditNoteMutation, EditNoteMutationVariables>;