import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-8">
              We apologize for the inconvenience. Please try refreshing the page or return home.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#008543] transition-colors"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="px-6 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
