@extends('dashblayout.dashlayout')
@section('body')





    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Investment Plans
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="#">Investment Packages</a></li>
            <li class="breadcrumb-item active">Plans</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content" style="margin-top:5%">
        <!-- START Card With Image -->
        <div class="row">
            @if (isset($plans) && $plans->count() > 0)
                @foreach ($plans as $plan)
                    <div class="col-md-4 col-lg-4 card bg-dark" style="margin-top:5%">
                        <div class="box box-default pull-up">
                            <img class="card-card-img-top img-responsive"
                                src="{{ asset('images/plans/plan' . ($loop->index + 1) . '.png') }}" alt="Card image cap">
                            <div class="box-body text-center card-body">
                                <h2 class="box-title card-header"><span>{{ $plan->name }}</span></h2>
                                <p>
                                <div class="col-12 col-md-12">
                                    <div class="box box-body bg-hexagons-white pull-up">
                                        <div class="media align-items-center p-0">
                                            <div class="text-center">
                                                <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                                            </div>
                                            <div>
                                                <h3 class="no-margin text-bold card-text">percent</h3>
                                                <span>{{ $plan->percentage }}%</span>
                                            </div>
                                        </div>
                                        <div class="flexbox align-items-center mt-25">
                                            <div>
                                                <p class="no-margin">Minimum</p>
                                                <p class="no-margin font-weight-600 text-yellow">
                                                   ${{ $plan->minimum }}</p>

                                            </div>
                                            <div class="text-right">
                                                <p class="no-margin">Maximum</p>
                                                <p class="no-margin font-weight-600 text-yellow">
                                                        ${{ $plan->maximum }}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </p>
                                <p>
                                <form action="{{ route('dashb_plans') }}" method="POST">
                                    @csrf
                                    <input type="text" hidden name="plan" value="{{ $plan->name }}" id="">
                                    <div class="form-group">
                                        <label>Select Duration</label>
                                        <select name="duration" class="form-control form-select">
                                            <option value="1">1 Week</option>
                                            <option value="2">2 Weeks</option>
                                            <option value="3">3 Weeks</option>
                                            <option selected value="4">4 Weeks</option>
                                            <option value="5">5 Weeks</option>
                                        </select>
                                    </div>
                                    </p>
                                    <p>
                                    <div class="input-group">
                                        <div class="input-group-text" id="inputGroup-sizing-sm">
                                            <button type="button" class="btn btn-info btn-sm">Amount</button>
                                        </div>
                                        <!-- /btn-group -->
                                        <input type="number" placeholder="Amount" name="amount" value=""
                                            class="form-control">
                                    </div>
                                    </p>
                                    <div class="input-group">
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary ">Proceed with Investment <i
                                                    class="fa fa-bag"></i></button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <!-- /.box-body -->
                        </div>
                        <!-- /.box -->
                    </div>
                @endforeach
            @else
                <div class="col-md-12 col-lg-12">
                    <div class="box box-default pull-up" style="text-align: center">
                        <h4>
                            No investment plan set by admin
                        </h4>
                    </div>
                </div>
            @endif






        </div>
        <!-- /.row -->
        <!-- END Card with image -->

<br><br>
    </section>
<br>




@endsection()
