export type ProductCreateFormProps = {
    // called with the created product object returned by the API
    onCreate?: (created: any) => void;
}