      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-gray-200">
          Page {page + 1} of {data?.totalPages || 1}
        </span>
        <button
          onClick={() =>
            setPage(p => (data && p < data.totalPages - 1 ? p + 1 : p))
          }
          disabled={data && page >= data.totalPages - 1}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
